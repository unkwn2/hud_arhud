#version 300 es
layout(location = 0) in vec4 a_pos;
layout(location = 1) in vec4 a_color;
layout(location = 2) in float a_size;
out vec4 color;
uniform mat4 u_mvp;
void main()
{
    gl_Position = u_mvp * a_pos;
    gl_PointSize = a_size;
    color = a_color;
}
