#version 300 es
precision mediump float;
layout (location = 0) in vec3 a_position;
layout (location = 1) in vec3 a_normal;
layout (location = 2) in vec2 a_texCoord;

uniform mat4 model;
// uniform mat4 view;
// uniform mat4 projection;
uniform mat4 mvp;
uniform mat3 matNormal;

out vec2 v_texCoord;
out vec3 normal;
out vec3 fragPos;
// out vec3 ambient;
// out vec3 diffuse;
// out vec3 specular;
void main()
{
	v_texCoord = a_texCoord;    
    vec4 position = vec4(a_position, 1.0);
    // gl_Position = projection * view * model * position;
    fragPos = vec3(model * position);
    normal = normalize(matNormal * a_normal);
    gl_Position = mvp * position;
            
}