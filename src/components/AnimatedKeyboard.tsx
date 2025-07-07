
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface KeyProps {
  char: string;
  isPressed?: boolean;
  isWide?: boolean;
  className?: string;
}

const Key: React.FC<KeyProps> = ({ char, isPressed, isWide, className }) => {
  return (
    <div
      className={cn(
        "relative bg-card border border-border rounded-lg flex items-center justify-center text-foreground font-medium transition-all duration-150 shadow-sm",
        isWide ? "col-span-2" : "",
        isPressed 
          ? "bg-primary text-primary-foreground transform translate-y-1 shadow-none border-primary" 
          : "hover:bg-accent transform-gpu",
        className
      )}
      style={{
        height: '45px',
        minWidth: isWide ? '80px' : '45px'
      }}
    >
      <span className={cn("text-sm", isPressed && "font-bold")}>
        {char}
      </span>
      {isPressed && (
        <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse"></div>
      )}
    </div>
  );
};

const AnimatedKeyboard = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [typingText] = useState("Financial operations for growth businesses");
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const bottomRowKeys = [
    { char: 'Space', isWide: true },
    { char: 'Enter', isWide: false }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < typingText.length) {
        const currentChar = typingText[currentIndex].toUpperCase();
        
        // Press key
        setPressedKeys(prev => new Set([...prev, currentChar === ' ' ? 'Space' : currentChar]));
        
        // Release key after 200ms
        setTimeout(() => {
          setPressedKeys(prev => {
            const newSet = new Set(prev);
            newSet.delete(currentChar === ' ' ? 'Space' : currentChar);
            return newSet;
          });
        }, 200);
        
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentIndex(0);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentIndex, typingText]);

  // Random key press effect
  useEffect(() => {
    const randomInterval = setInterval(() => {
      const allKeys = keyboardLayout.flat().concat(['Space']);
      const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];
      
      setPressedKeys(prev => new Set([...prev, randomKey]));
      
      setTimeout(() => {
        setPressedKeys(prev => {
          const newSet = new Set(prev);
          newSet.delete(randomKey);
          return newSet;
        });
      }, 100);
    }, 800);

    return () => clearInterval(randomInterval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border shadow-2xl">
      {/* Glow effects */}
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 space-y-4">
        {/* Display text being typed */}
        <div className="text-center mb-8">
          <div className="text-lg font-mono text-muted-foreground bg-background/50 p-4 rounded-lg border border-border">
            {typingText.slice(0, currentIndex)}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Keyboard layout */}
        <div className="space-y-3">
          {keyboardLayout.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="flex justify-center gap-2"
              style={{
                marginLeft: rowIndex === 1 ? '20px' : rowIndex === 2 ? '40px' : '0'
              }}
            >
              {row.map((key) => (
                <Key
                  key={key}
                  char={key}
                  isPressed={pressedKeys.has(key)}
                />
              ))}
            </div>
          ))}
          
          {/* Bottom row with space and enter */}
          <div className="flex justify-center gap-2 mt-4">
            {bottomRowKeys.map((key) => (
              <Key
                key={key.char}
                char={key.char}
                isPressed={pressedKeys.has(key.char)}
                isWide={key.isWide}
                className={key.isWide ? "px-8" : ""}
              />
            ))}
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom info */}
      <div className="text-center mt-6 text-sm text-muted-foreground">
        <span className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
          Typing automation in action
        </span>
      </div>
    </div>
  );
};

export default AnimatedKeyboard;
