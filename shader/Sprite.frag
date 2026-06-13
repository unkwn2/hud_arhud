#version 300 es
precision mediump float;
in vec2 v_texCoord;
in vec2 v_posCoord;
in vec3 ambient;
in vec3 diffuse;
in vec3 specular;

layout(location=0)out vec4 outColor;
uniform int s_type;
uniform sampler2D s_baseMap;
uniform vec4 u_color;

void main()
{
    vec4 baseColor;
    baseColor=texture(s_baseMap,v_texCoord);
    outColor=baseColor * u_color;
    //vec4 color = vec4(1.0f,0.0f,0.0f,1.0f);
    //outColor=baseColor * color;
}

