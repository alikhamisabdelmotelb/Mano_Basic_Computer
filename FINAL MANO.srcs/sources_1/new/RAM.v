
module RAM (CLK,read,AR,write,INDATA,OUTDATA );
    input CLK,read,write;
    input [15:0]INDATA;
    input [11:0] AR;
    output reg [15:0] OUTDATA;
    
    reg [15:0] RAM [4095:0];
        
    initial 
    begin
    RAM[0] = 16'h7020;       //INR AC
    RAM[1] = 16'h7800;       //clear AC
    RAM[2] = 16'h7200;       //CMA
    RAM[3] = 16'h2004;       //LDA      
    RAM[4] = 16'h1002;    //ADD
    RAM[5] = 16'h7001;       //HLT
    end
    
    always@* begin
        if (write)
            RAM[AR] <= INDATA;
        else if(read)
            OUTDATA = RAM[AR];
        end

endmodule
