#version 300 es
precision mediump float;
in vec4 color;
layout(location = 0) out vec4 outColor;
void main()
{
    outColor = color;
    //outColor = vec4(0.0157, 0.2941, 0.1216, 1.0);
}
