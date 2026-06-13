#version 300 es
precision mediump float;
in vec2 v_texCoord;

layout(location=0)out vec4 outColor;
uniform sampler2D s_baseMap;
uniform vec4 u_color;

void main()
{
    outColor=texture(s_baseMap,v_texCoord) * u_color;
    outColor=vec4(u_color.rgb,texture(s_baseMap,v_texCoord).r * u_color.a);
}