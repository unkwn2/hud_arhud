#version 300 es
layout(location = 0) in vec3 a_pos;  
layout(location = 1) in vec2 a_texCoord;  
layout(location = 2) in vec4 a_color;
out vec2 v_texCoord;
out vec4 color;
uniform mat4 u_mvp;
uniform vec4 u_color;
void main()
{
    gl_Position = u_mvp * vec4(a_pos,1.0f);
    v_texCoord = a_texCoord;  
    color = a_color * u_color;
}
