#version 300 es
in vec2 v_texCoord;  
uniform sampler2D s_baseMap;
layout(location = 0) out vec4 outColor;
void main()
{
    outColor=texture(s_baseMap,v_texCoord);
}
