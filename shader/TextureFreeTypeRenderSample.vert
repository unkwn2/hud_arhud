#version 300 es                          
layout(location = 0) in vec4 a_position;   
layout(location = 1) in vec2 a_texCoord;  

uniform int u_devType; 
uniform mat4 u_MVPMatrix;
out vec2 v_texCoord;
out vec2 v_posCoord;
out int fu_devType;                  
void main()                                
{   
  
        gl_Position =   vec4(a_position.xy, 0.0, 1.0);
        v_posCoord = a_position.xy;
        v_texCoord = a_position.zw;    
}

