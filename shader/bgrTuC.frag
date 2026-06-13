#version 300 es
precision mediump float;
in vec2 v_texCoord;

layout(location=0)out vec4 outColor;
uniform sampler2D s_baseMap;
uniform vec4 u_color;

void main()
{
    vec4 texColor = texture(s_baseMap,v_texCoord);
    outColor= vec4(texColor.b,texColor.g,texColor.r,texColor.a) * u_color;
}
