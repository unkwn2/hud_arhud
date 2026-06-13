#version 300 es
layout(location = 0) in vec3 a_pos;  
layout(location = 1) in vec2 a_texCoord;  
layout(location = 2) in float a_weight;
out vec2 v_texCoord;
uniform mat4 u_mvp;
uniform float u_offset;
void main()
{
    vec3 newPos = a_pos;
    newPos.x += u_offset * smoothstep(0.0f,1.0f,a_weight);
    gl_Position = u_mvp * vec4(newPos,1.0f);
    v_texCoord = a_texCoord;
}
