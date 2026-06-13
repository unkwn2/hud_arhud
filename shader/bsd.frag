#version 300 es
precision mediump float;
in vec2 v_texCoord;  
uniform sampler2D s_baseMap;
layout(location = 0) out vec4 outColor;
uniform float m_alpha;
void main()
{
	vec4 baseColor;
    baseColor=texture(s_baseMap,v_texCoord);
    //outColor = color;
    outColor = baseColor*vec4(1.0, 1.0, 1.0, m_alpha);
}
