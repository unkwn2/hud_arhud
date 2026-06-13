#version 300 es
precision mediump float;
layout (location = 0) in vec3 a_position;
layout (location = 1) in vec3 a_normal;
layout (location = 2) in vec2 a_texCoord;

uniform mat4 matP;
uniform mat4 matMV;
uniform mat3 matItMV;
uniform vec3 strokeColor;

out vec4 color;
void main()
{
    vec3 normal = normalize(matItMV * a_normal);
    // gl_Position = projection * view * model * position;
    //gl_Position = matP * (matMV * vec4(a_position, 1.0) + vec4(normal*0.05f,0));
    gl_Position = matP * matMV * vec4(a_position, 1.0) + matP * vec4(normal.xy,0.0f,0.0f)*0.01f;
    color = vec4(strokeColor,1.0f);
}
