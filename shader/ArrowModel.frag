#version 300 es
precision highp float;
out vec4 outColor;
in vec2 v_texCoord;
in vec3 ambient;
in vec3 diffuse;
in vec3 specular;
uniform sampler2D texture_diffuse1;
uniform vec4 u_color;
uniform vec3 u_Kd;
void main()
{
    vec4 objectColor=vec4(0.4, 0.4, 0.2824, 1.0);
    //vec3 finalColor=(ambient+diffuse+specular)*vec3(objectColor);
    vec3 finalColor=(ambient+diffuse+specular)*u_Kd;
    //outColor = finalColor ;
    outColor=vec4(finalColor,1.) * u_color;
    // outColor = vec4(diffuse,1.0f) ;
}
