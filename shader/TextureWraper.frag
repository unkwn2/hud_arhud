#version 300 es                                     
precision mediump float;
layout(location = 0) out vec4 outColor;             
in vec2 v_texCoord;  
uniform sampler2D s_baseMap;

void main()                                         
{      
    vec2 newCoord = vec2(v_texCoord.x, 1. - v_texCoord.y);                                                                                                           
    outColor = texture( s_baseMap, newCoord );
    // outColor = vec4( 0.0f,1.0f,0.0f,1.0f );
}  

