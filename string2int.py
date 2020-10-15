def allNumburic(word):
    numberic =  {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
    numberCollection=[]
    digit= 0 
    answer =0
    for character in word:
        if character in numberic:
            digit+=1
            numberCollection.append(numberic.get(character))
    for number in numberCollection:
        answer+=number*power(10,digit)
        digit-=1
    return answer

def power(base,exponent):
    result = 1;
    for i in range(1,exponent):
        result*=base    
    return result
input = input("Please enter input: ")
result = allNumburic(input)
print(result)
print("answer is instanceOf int: ", isinstance(result,int))