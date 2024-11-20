def displayMenu():
    print( "Welcome to my calculator" )
def addNumbers( firstNumber, secondNumber ):
    sum = firstNumber + secondNumber
    print( "The sum of " + firstNumber + " and " + secondNumber + " is " + sum )

def subtractNumbers( firstNumber, secondNumber ):
    difference = firstNumber - secondNumber
    print( "The difference of " + firstNumber + " and " + secondNumber + " is " + difference )

def multiplyNumbers( firstNumber, secondNumber ):
    product = firstNumber - secondNumber
    print( "The product of " + firstNumber + " and " + secondNumber + " is " + product )

def divideNumbers( firstNumber, secondNumber ):
    quotient = firstNumber - secondNumber
    print( "The quotien of " + firstNumber + " and " + secondNumber + " is " + quotient )

    def main(): # This is the main program
        #1. Let's display the menu to the user
        displayMenu()
        userOption = int ( input( "First Number " ) ) 
        userOption = int ( input( "Second Number " ) ) 

        if userOption == 1:
            addNumbers()
        elif userOption == 2:
            subtractNumbers()
        elif userOption == 3:
            multiplyNumbers()
        elif userOption == 4:
            divideNumbers()



