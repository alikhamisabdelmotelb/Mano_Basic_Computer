
module RAM (CLK,read,AR,write,INDATA,OUTDATA );
    input CLK,read,write;
    input [15:0]INDATA;
    input [11:0] AR;
    output reg [15:0] OUTDATA;
    
    reg [15:0] RAM_4K [4095:0];
        
    initial 
    begin
    RAM_4K[0] = 16'h7020;       //INR AC
    RAM_4K[1] = 16'h7800;       //clear AC
    RAM_4K[2] = 16'h7200;       //CMA
    RAM_4K[3] = 16'h2004;       //LDA      
    RAM_4K[4] = 16'h2002;       //ADD
    RAM_4K[5] = 16'h7001;       //HLT
    end
    
    always@* begin
        if (write)
            RAM_4K[AR] <= INDATA;
        else if(read)
            OUTDATA = RAM_4K[AR];
        end

endmodule
