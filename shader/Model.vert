#version 300 es
precision mediump float;
layout (location = 0) in vec3 a_position;
layout (location = 1) in vec3 a_normal;
layout (location = 2) in vec2 a_texCoord;
out vec2 v_texCoord;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

uniform vec3 lightPos;
uniform vec3 lightColor;
uniform vec3 viewPos;
out vec3 ambient;
out vec3 diffuse;
out vec3 specular;
void main()
{
	v_texCoord = a_texCoord;    
    vec4 position = vec4(a_position, 1.0);
    gl_Position = projection * view * model * position;
    vec3 fragPos = vec3(model * position);
            
     // Ambient
    float ambientStrength = 1.0;
    ambient = ambientStrength * lightColor;

    // Diffuse
    float diffuseStrength = 1.5;
    vec3 unitNormal = normalize(vec3(transpose(inverse(model)) * vec4(a_normal, 1.0)));
    vec3 lightDir = normalize(lightPos - fragPos);
    float diff = max(dot(unitNormal, lightDir), 0.0);
    diffuse = diffuseStrength * diff * lightColor;
            
    // Specular
    float specularStrength = 0.7;
    vec3 viewDir = normalize(viewPos - fragPos);
    vec3 reflectDir = reflect(-lightDir, unitNormal);
    float spec = pow(max(dot(unitNormal, reflectDir), 0.0), 32.0);
    specular = specularStrength * spec * lightColor;
}