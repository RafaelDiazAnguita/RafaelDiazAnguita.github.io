def arithmetic(problems):
# pisahkan setiap value
    atas = [i.split()[0] for i in problems] 
    bawah = [i.split()[2] for i in problems] 
    operator = [i.split()[1] for i in problems] 
    
    output_atas = ""
    output_bawah = ""
 
    for j in range( len(problems) ):
        output_atas += f"{atas[j]:>8}"
        output_bawah += f"{operator[j]}  {bawah[j]:>5}"

 
    print(output_atas)
    print(output_bawah)



arithmetic(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])