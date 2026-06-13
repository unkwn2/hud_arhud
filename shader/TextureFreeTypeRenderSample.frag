#version 300 es                                     
precision mediump float;                            
in vec2 v_texCoord;
in vec2 v_posCoord; 

layout(location = 0) out vec4 outColor;             
uniform int s_type;                        
uniform sampler2D s_baseMap;
uniform vec3 u_textColor;                                         
void main()                                         
{      

    float alpha = smoothstep(0.15+0.7,0.15,abs(1.0-0.75)); 
    
    vec4 color = texture(s_baseMap, v_texCoord)   ;

    if(color.x==0.0)
        if(color.y==0.0)
            if(color.z==0.0)
                alpha = 0.0 ;

    outColor = vec4(u_textColor, alpha) * color     ;
     
}