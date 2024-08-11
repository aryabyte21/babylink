import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Input,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import { IconBabyCarriage } from "@tabler/icons";
import { FooterSocial } from "./FooterSocial";
import toast from "react-hot-toast";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 0,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.sm,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.sm * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.sm,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function HeroTitle() {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  async function updateGoly(originalUrl: string) {
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://babylink.lol",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: originalUrl,
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await res.json();
      const generatedLink = `https://babylink.lol/${json.short_code}`;

      navigator.clipboard.writeText(generatedLink).then(() => {
        toast.success("Link copied to clipboard!");
      });
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Your link{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            now lean and mean!
          </Text>{" "}
        </h1>

        <Text className={classes.description} color="dimmed">
          Generate urls faster than ever.
        </Text>

        <Group className={classes.controls}>
          <Input
            icon={<IconBabyCarriage size={30} />}
            placeholder="Paste your link here"
            name="redirect"
            id="redirect"
            size="lg"
            value={name}
            onChange={(e:any) => setName(e.target.value)}
          />

          <Button
            color="blue"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            onClick={() => updateGoly(name)}
            disabled={isLoading}
            rightIcon={isLoading && <Loader />}
          >
            {isLoading ? "Generating" : "Copy babylink"}
          </Button>
        </Group>
      </Container>
      <FooterSocial />
    </div>
  );
}
