"use client"
import { Button, ButtonProps, styled } from "@mui/material"

interface MUIButtonProps extends ButtonProps {
    label: string,
}

export const CustomButton: React.FC<MUIButtonProps> = ({
    label,
    onClick,
    variant = "outlined",
    disabled = false,
    ...rest
}) => {
    return (
        <StyledButton
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {label}
        </StyledButton>
    )
}

const StyledButton = styled(Button)({
    "&.MuiButton-root": {
        color: "#5F4B8B !important",
        border: " 1px solid #5F4B8B !important"
    }
})