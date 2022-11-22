import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  InputProps
> = ({ name, error = null, icon: Icon, label, ...rest }, ref) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement mt="2.5" color={inputVariation[variation]}>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraTextarea
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          name={name}
          bg="gay.50"
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const TextArea = forwardRef(TextAreaBase);
