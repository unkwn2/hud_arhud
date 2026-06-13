#version 300 es
precision mediump float;
in vec4 color;
uniform sampler2D s_baseMap;
layout(location = 0) out vec4 outColor;
void main()
{
    outColor = color * texture(s_baseMap,gl_PointCoord);
}
