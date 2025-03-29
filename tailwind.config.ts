
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Cryptique (light theme)
				crypto: {
					purple: '#8B5CF6',
					blue: '#0EA5E9',
					green: '#10B981',
					pink: '#D946EF',
					dark: '#1A1F2C',
					gray: '#8E9196',
					light: '#F8F9FA',
					gold: '#CAA968',
					navy: '#1D0C46',
					// Mixed colors of gold and navy for visual appeal
					goldNavy: 'linear-gradient(135deg, #CAA968, #1D0C46)',
					navyGold: 'linear-gradient(135deg, #1D0C46, #CAA968)',
					goldLight: '#E6D5B8',  // Lighter gold for contrast
					navyLight: '#3A2A6A',  // Lighter navy for contrast
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.7',
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(202, 169, 104, 0.5), 0 0 10px rgba(202, 169, 104, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 15px rgba(202, 169, 104, 0.8), 0 0 20px rgba(202, 169, 104, 0.5)'
					}
				},
				'cyber-scan': {
					'0%': {
						backgroundPosition: '0% 0%'
					},
					'100%': {
						backgroundPosition: '100% 100%'
					}
				},
				'glitch': {
					'0%, 100%': {
						transform: 'translate(0)'
					},
					'33%': {
						transform: 'translate(-5px, 2px)'
					},
					'66%': {
						transform: 'translate(5px, -2px)'
					}
				},
				'feature-hover': {
					'0%': { 
						transform: 'scale(1)' 
					},
					'50%': { 
						transform: 'scale(1.05)' 
					},
					'100%': { 
						transform: 'scale(1)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'shimmer': 'shimmer 8s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 3s ease-in-out infinite',
				'cyber-scan': 'cyber-scan 15s ease-in-out infinite',
				'glitch': 'glitch 0.5s ease-in-out infinite',
				'feature-hover': 'feature-hover 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(243, 244, 246, 1))',
				'golden-gradient': 'linear-gradient(45deg, #CAA968, #F5E1A4, #CAA968)',
				'navy-gradient': 'linear-gradient(45deg, #1D0C46, #3A2A6A, #1D0C46)',
				'gold-navy-gradient': 'linear-gradient(45deg, #CAA968, #1D0C46)',
				'navy-gold-gradient': 'linear-gradient(45deg, #1D0C46, #CAA968)',
				'cyber-grid': 'linear-gradient(#DEDEE6 1px, transparent 1px), linear-gradient(to right, #DEDEE6 1px, #FFF 1px)',
				'futuristic-glow': 'radial-gradient(circle at center, rgba(202, 169, 104, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
