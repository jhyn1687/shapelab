%%%%%%%%%%
%%%%%this is the stimulus creation program for the b8 stimuli
%%%%%51 stimuli in all. These were presented at 1, 2, 4 or 8 rotations
%%%%%based on rotational symmetry
%%%%%to create the stimuli, in addition to this program you need:
%%%%%vertices1.txt
%%%%%fvmax.m

%%%%%At the matlab prompt type the name of this program. When prompted for
%%%%%the stimulus number, type a number between 1 and 51.
%%%% in the figure left panel is the stimulus
%%%%%The x and y vertices of the stimuli are given by bufvert 

%%%%stimuli are presented in 8 rotations except for:
%%%%1 and 2: 1 rotation
%%%%5, 7, 34 : 4 rotations
%%%%32, 37 : 2 rotations.
%%%%stimulus numbering order is each stimulus in all rots

fidr = fopen('vertices1.txt', 'r');
idx = 0;
j = input('Enter Stimulus number (1:51): ');
for i = 1:51
  vrtnum = fscanf(fidr, '%d', [1, 1]);
  disp(vrtnum);
  in = (fscanf(fidr, '%f', [2, vrtnum]))';
  if(j == i)
    figure;
    bufvert = fvmax(in); %%% vertices for the stimulus
    [th,rad] = cart2pol(bufvert(:,1), bufvert(:,2));
    
    nrot = ones(51).*8;
    nrot([1 2]) = 1; %stimuli with only 1 rot
    nrot([5 7 34]) = 4; %stimuli with 4 rots
    nrot([32 37]) = 2; %stimuli with 2 rots
    for r = 1:nrot(i)
       subplot(8,8,(r-1)*8+1); 
       fill([-2.0 2.0 2.0 -2.0], [-2.0 -2.0 2.0 2.0], 'k', 'EdgeColor', 'none');
       hold
       %rotate the vertices
       [vx, vy] = pol2cart(th+(r-1)*pi/4, rad);
       fill(vx, vy, 'w');  
       fill(0.8.*vx, 0.8.*vy, 'k');
       set(gca, 'PlotBoxAspectRatio', [1 1 1]);
       
    end
  end
end
fclose(fidr);
