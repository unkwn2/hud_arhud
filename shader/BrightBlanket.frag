#version 300 es
precision mediump float;
in vec2 v_texCoord;
in vec4 color;
layout(location = 0) out vec4 outColor;
uniform sampler2D s_baseMap;
void main()
{
    vec4 newColor = color;
    if(gl_FragCoord.y < 220.0f)
    {
        newColor.a *= 1.0 - (220.0 - gl_FragCoord.y)*0.015f;
    }
    outColor = newColor*texture(s_baseMap,v_texCoord)*1.2f;
    //outColor = vec4(0.0157, 0.2941, 0.1216, 1.0);
}
