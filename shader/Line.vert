#version 300 es
layout(location = 0) in vec3 a_pos;  
layout(location = 1) in vec2 a_texCoord;  
layout(location = 2) in vec4 a_color;
layout(location = 3) in vec3 a_tan;
layout(location = 4) in float a_sign;
out vec2 v_texCoord;
out vec4 color;
uniform mat4 u_mvp;
uniform vec3 u_eyePos;
uniform float u_width;
void main()
{
    vec3 eyeDir = normalize(u_eyePos - a_pos);
    vec3 offsetDir = normalize(cross(eyeDir,a_tan));
    // vec3 offsetDir = vec3(0.0f,1.0f,0.0f);
    vec3 newPos = a_pos + offsetDir * (u_width * a_sign);
    gl_Position = u_mvp * vec4(newPos,1.0f);
    v_texCoord = a_texCoord;  
    color = a_color;
}
