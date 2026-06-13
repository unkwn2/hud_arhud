#version 300 es
precision mediump float;

in vec3 fragColor;
in vec2 fragTexCoord;

uniform sampler2D s_baseMap;
uniform int type; //0 bg 1 frontground
layout(location = 0) out vec4 outColor;
void main()
{
    if(type == 0)
    {
        outColor = texture(s_baseMap,fragTexCoord);
    }
    else
    {
        outColor = vec4(fragColor, 1.0);
    }
}
