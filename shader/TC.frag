#version 300 es
precision mediump float;
in vec2 v_texCoord;
in vec4 color;
layout(location=0)out vec4 outColor;
uniform sampler2D s_baseMap;

void main()
{
    outColor=texture(s_baseMap,v_texCoord) * color;
}
