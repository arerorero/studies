def clear_screen
    # Print the escape sequence for clearing the screen
    print "\e[2J\e[f"
  end

def calculus (x, operator, y)
    if getError(x,operator,y) != nil
        return getError(x,operator,y)
    end
    x = x.to_f
    y = y.to_f
    case operator
    when "+"
        result = x + y
    when "-"
        result = x - y
    when "*"
        result = x * y
    when "/"
        result = x / y
    end
    return result
end

def getError(x,operator,y)
    if operator != "+" && operator != "-" && operator != "*" && operator != "/"
        return "Error: Invalid operator"
    end
    if !isNumber?(x) || !isNumber?(y)
        return "Error: Invalid number"
    end
    if y == "0" && operator == "/"
        return "Error: Division by zero"
    end
end

def isNumber?(string)
    true if Float(string) rescue false
end

puts 'Welcome to my Calculator!
This is My first Ruby code!!
Press Enter to continue!!'

user_input = gets.chomp
clear_screen
puts '# Enter the first number: '
x = gets.chomp

puts '# Enter the operation (+, -, *, /): +'
operator = gets.chomp

puts '# Enter the second number: '
y = gets.chomp

result = calculus(x, operator, y)
puts "The result is: #{result}"