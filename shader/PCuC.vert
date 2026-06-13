#version 300 es
layout(location = 0) in vec4 a_pos;
layout(location = 1) in vec4 a_color;
out vec4 color;
uniform mat4 u_mvp;
uniform vec4 u_color;
void main()
{
    gl_Position = u_mvp * a_pos;
    color = a_color * u_color;
}
