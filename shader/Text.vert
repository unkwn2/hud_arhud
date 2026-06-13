#version 300 es
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aTexCoords;

uniform mat4 u_MVPMatrix;

out vec2 texCoords;
void main()
{
    texCoords = aTexCoords ; 
    gl_Position = u_MVPMatrix * vec4(aPos, 1.0) ; 
}
