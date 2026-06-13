#version 300 es
precision highp float;
out vec4 outColor;
in vec2 v_texCoord;
in vec3 normal;
in vec3 fragPos;
// in vec3 ambient;
// in vec3 diffuse;
// in vec3 specular;
uniform sampler2D texture_diffuse1;
uniform vec4 u_color;
uniform vec3 u_Kd;
uniform int isUseTexture;
uniform vec3 lightPos;
uniform vec3 lightColor;
uniform vec3 viewPos;
void main()
{
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    
    vec3 norm = normalize(normal);
    float ambientStrength = 0.4f;
    ambient = ambientStrength * lightColor*u_Kd;

    // Diffuse
    float diffuseStrength = 0.6;
    vec3 lightDir = normalize(lightPos - fragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    // diff = max(dot(a_normal, -lightDir), 0.0);
    diffuse = diffuseStrength * diff * lightColor*u_Kd;
    
    // Specular
    float specularStrength = 0.75;
    vec3 viewDir = normalize(viewPos - fragPos);
    vec3 reflectDir = reflect(-lightDir, norm);
    float spec = pow(max(dot(norm, reflectDir), 0.0), 32.0);
    specular = specularStrength * spec * lightColor;

    vec4 finalColor=vec4(ambient+diffuse+specular,1.0f);
    if(isUseTexture == 1)
    {
        finalColor = finalColor * texture(texture_diffuse1,v_texCoord);
    }
    outColor=finalColor * u_color;
}
