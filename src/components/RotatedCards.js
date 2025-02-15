import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { styled } from "@mui/system";

// // Types
// interface RotatingCardsProps {
//   autoRotateInterval?: number;
// }

// interface CarouselItem {
//   title: string;
//   description: string;
//   buttonName: ServiceButtons;
// }

// enum ServiceButtons {
//   ExploreDesigns = "Explore Designs",
//   BookAppointment = "Book Appointment",
//   ContactUs = "Contact Us",
// }

// type CardPosition = "center" | "left" | "right" | "hidden";

// interface StyledCardProps {
//   position: CardPosition;
// }

// Styled Components
const Container = styled("div")({
  position: "relative",
  height: "400px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    height: "300px",
  },
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  zIndex: 30,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
}));

const StyledCard = styled(Card)(({ position }) => {
  const baseStyles = {
    position: "absolute",
    width: "37vw",
    height: "15rem",
    transition: "all 500ms ease-in-out",
  } ;

  const mobileStyles = {
    width: "70vw",
    height: "15rem",
  };

  switch (position) {
    case "center":
      return {
        ...baseStyles,
        zIndex: 20,
        transform: "scale(1)",
        opacity: 1,
        filter: "blur(0)",
        "@media (max-width: 768px)": mobileStyles,
      };
    case "right":
      return {
        ...baseStyles,
        zIndex: 10,
        transform: "translateX(120px) rotate(8deg) scale(0.9)",
        opacity: 0.7,
        filter: "blur(2px)",
        "@media (max-width: 768px)": {
          ...mobileStyles,
          transform: "translateX(60px) rotate(8deg) scale(0.9)",
        },
      };
    case "left":
      return {
        ...baseStyles,
        zIndex: 10,
        transform: "translateX(-120px) rotate(-8deg) scale(0.9)",
        opacity: 0.7,
        filter: "blur(2px)",
        "@media (max-width: 768px)": {
          ...mobileStyles,
          transform: "translateX(-60px) rotate(-8deg) scale(0.9)",
        },
      };
    default:
      return {
        ...baseStyles,
        transform: "scale(0.75)",
        opacity: 0,
        "@media (max-width: 768px)": {
          ...mobileStyles,
          transform: "scale(0.6)",
        },
      };
  }
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "auto",
  padding: "10px 20px",
  borderRadius: "10px",
  textTransform: "none",
  fontWeight: 600,
  backgroundColor: "black",
  border: "1px solid black",
  color:"white",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
  },
  "@media (max-width: 768px)": {
    padding: "8px 16px",
    fontSize: "0.875rem",
  },
}));

const Title = styled("div")({
  fontWeight: 900,
  color: "#333",
  fontFamily: "Poppins, sans-serif",

  fontSize: "1.5rem",
  textAlign: "center",
  "@media (max-width: 768px)": {
    fontSize: "1.2rem",
  },
});

const Description = styled("div")({
  color: "var(--text-secondary, #6b7280)",
  marginBottom: "1.5rem",
  fontFamily: "Poppins, sans-serif",
  textAlign: "center",
  fontSize: "1rem",
  "@media (max-width: 768px)": {
    fontSize: "0.875rem",
  },
});

// Main Component
const RotatingCards= ({
  autoRotateInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselDetails = [
    {
      title: "3D Interior Visualization",
      description: "Experience high-quality 3D renders to visualize your space before execution. ",
      buttonName: "View Portfolio",
    },
    {
      title: "Video Walkthrough",
      description: "Take an immersive video tour of your designed interiors before implementation. ",
      buttonName: "Book Consultation",
    },
    {
      title: "Budget-Friendly Designs",
      description: "Get elegant and functional interior designs customized to fit your budget.",
      buttonName: "Get Quote",
    }
];



  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselDetails.length);
    }, autoRotateInterval);

    return () => clearInterval(timer);
  }, [autoRotateInterval]);

  const handlePrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + carouselDetails.length) % carouselDetails.length
    );
  };

  const handleNext =() => {
    setActiveIndex((current) => (current + 1) % carouselDetails.length);
  };

  const getCardPosition = (index) => {
    const position =
      (index - activeIndex + carouselDetails.length) % carouselDetails.length;
    if (position === 0) return "center";
    if (position === 1) return "right";
    if (position === carouselDetails.length - 1) return "left";
    return "hidden";
  };

  const handleButtonClick = (buttonName) => {
    console.log(`Button clicked: ${buttonName}`);
  };

  return (
    <Container>
      <NavigationButton
        sx={{ left: "16px" }}
        onClick={handlePrevious}
        aria-label="Previous card"
      >
        <ChevronLeft />
      </NavigationButton>

      <NavigationButton
        sx={{ right: "16px" }}
        onClick={handleNext}
        aria-label="Next card"
      >
        <ChevronRight />
      </NavigationButton>

      {carouselDetails.map((card, index) => (
        <StyledCard key={index} position={getCardPosition(index)} elevation={10}>
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2rem",
              backgroundColor: "#fff"
            }}
          >
            <Title className="!font-bold">{card.title}</Title>
            <Description className="mt-2">{card.description}</Description>
            <StyledButton className="!mb-2 bg-black text-white" onClick={() => handleButtonClick(card.buttonName)}>
              {card.buttonName}
            </StyledButton>
          </CardContent>
        </StyledCard>
      ))}
    </Container>
  );
};

export default RotatingCards;
