import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    breakpoints: {
        xsm: "768px",
        xlg: "960px",
        xxlg: "1005px"
    },
    components: {
        Button: {
            baseStyle: {
                rounded: 0,
            },
            defaultProps: {
                colorScheme: 'purple'
            }
        },
        Checkbox: {
            defaultProps: {
                colorScheme: "purple"
            }
        },
        ModalContent: {
            defaultProps: {
                rounded: 0
            }
        },
        Select: {
            sizes: {
                xs: {
                    field: {
                        borderRadius: 0,
                        fontSize: "xs",
                        height: 6,
                        paddingX: 2,
                    },
                },
                sm: {
                    field: {
                        borderRadius: 0,
                        fontSize: "sm",
                        height: 8,
                        paddingX: 3,
                    },
                },
                md: {
                    field: {
                        borderRadius: 0,
                        fontSize: "md",
                        height: 10,
                        paddingX: 4,
                    },
                },
                lg: {
                    field: {
                        borderRadius: 0,
                        fontSize: "lg",
                        height: 12,
                        paddingX: 4,
                    },
                },
            },
            variants: {
                outline: {
                    field: {
                        background: "inherit",
                        border: "1px solid",
                        borderColor: "inherit",
                        focusBorderColor: "purple",
                        _focus: {
                            zIndex: 1,
                            borderColor: "purple.200",
                            boxShadow: 0,
                        },
                        _hover: { borderColor: "gray.300" },
                    },
                },
                filled: {
                    field: {
                        background: "gray.100",
                        border: "2px solid",
                        borderColor: "transparent",
                        _focus: {
                            background: "transparent",
                            borderColor: "purple.200",
                        },
                        _hover: {
                            background: "gray.300",
                        },
                    },
                },
                flushed: {
                    field: {
                        background: "transparent",
                        borderBottom: "1px solid",
                        borderColor: "inherit",
                        borderRadius: 0,
                        paddingX: 0,
                        _focus: {
                            borderColor: "purple.200",
                            boxShadow: 0,
                        },
                    },
                },
                unstyled: {
                    field: {
                        background: "transparent",
                        borderRadius: 0,
                        height: "auto",
                        paddingX: 0,
                    },
                },
            },
            defaultProps: {
                size: "md",
                variant: "outline",
                focusBorderColor: "purple"
            },
        },
        Input: {
            sizes: {
                xs: {
                    field: {
                        borderRadius: 0,
                        fontSize: "xs",
                        height: 6,
                        paddingX: 2,
                    },
                },
                sm: {
                    field: {
                        borderRadius: 0,
                        fontSize: "sm",
                        height: 8,
                        paddingX: 3,
                    },
                },
                md: {
                    field: {
                        borderRadius: 0,
                        fontSize: "md",
                        height: 10,
                        paddingX: 4,
                    },
                },
                lg: {
                    field: {
                        borderRadius: 0,
                        fontSize: "lg",
                        height: 12,
                        paddingX: 4,
                    },
                },
            },
            variants: {
                outline: {
                    field: {
                        background: "inherit",
                        border: "1px solid",
                        borderColor: "inherit",
                        focusBorderColor: "purple",
                        _focus: {
                            zIndex: 1,
                            borderColor: "purple.200",
                            boxShadow: 0,
                        },
                        _hover: { borderColor: "gray.300" },
                    },
                },
                filled: {
                    field: {
                        background: "gray.100",
                        border: "2px solid",
                        borderColor: "transparent",
                        _focus: {
                            background: "transparent",
                            borderColor: "purple.200",
                        },
                        _hover: {
                            background: "gray.300",
                        },
                    },
                },
                flushed: {
                    field: {
                        background: "transparent",
                        borderBottom: "1px solid",
                        borderColor: "inherit",
                        borderRadius: 0,
                        paddingX: 0,
                        _focus: {
                            borderColor: "purple.200",
                            boxShadow: 0,
                        },
                    },
                },
                unstyled: {
                    field: {
                        background: "transparent",
                        borderRadius: 0,
                        height: "auto",
                        paddingX: 0,
                    },
                },
            },
            defaultProps: {
                size: "md",
                variant: "outline",
                focusBorderColor: "purple"
            },
        },
        Textarea: {
            defaultProps: {
                size: "md",
                variant: "outline",
                colorScheme: "purple",
                
            },
        }
    }
})