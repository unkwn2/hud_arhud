#version 300 es
layout(location = 0) in vec3 inPosition;
layout(location = 1) in vec2 inTexCoord;
layout(location = 2) in vec3 inColor;

out vec3 fragColor;
out vec2 fragTexCoord;

uniform mat4 u_MVPMatrix;

void main() {
    gl_Position = u_MVPMatrix * vec4(inPosition, 1.0);
    fragColor = inColor;
    fragTexCoord = inTexCoord;
}