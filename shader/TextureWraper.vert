#version 300 es                          
layout(location = 0) in vec3 a_position; 
layout(location = 1) in vec2 a_texCoord;

out vec2 v_texCoord;
uniform mat4 u_MVPMatrix;
uniform mat3 u_matTex;
           
void main()                                
{   
    gl_Position =  u_MVPMatrix * vec4(a_position, 1.0f);
    v_texCoord = (u_matTex * vec3(a_texCoord,1.0)).xy;
}