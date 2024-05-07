`timescale 1ns / 1ps

module IR_Control(D, T, CLR, INR, LD);

    input [7:0] D, T;
    output INR, CLR, LD;
    
    assign INR = 0;
    assign CLR = 0;
    assign LD = T[1];
endmodule
