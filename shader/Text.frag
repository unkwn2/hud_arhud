#version 300 es
precision mediump float;
in vec2 texCoords;
out vec4 color;

uniform sampler2D texture0;
uniform vec4 u_textColor;
uniform int rolling;
uniform float x_min;
uniform float x_max;


void main() {
    vec4 colorTemp = vec4(1.0, 1.0, 1.0, texture(texture0, texCoords).r); 
    // float l = texture(texture0, texCoords).r; 

    if(rolling == 1 && (gl_FragCoord.x < x_min || gl_FragCoord.x > x_max))
    {
        discard;
    }
    // color = vec4(u_textColor.rgb * l,u_textColor.a); 

    color = colorTemp * u_textColor; 
}

