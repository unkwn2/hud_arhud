#version 300 es
precision mediump float;
layout(location = 0) out vec4 outColor;
uniform vec4 u_Color;
void main()
{
    //outColor = texture(s_TextureMap, v_texCoord);
  //  outColor = u_Color;
    outColor = vec4(1.0,0.0,0.0,0.01);
}

