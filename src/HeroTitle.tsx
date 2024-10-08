import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Input,
  Loader,
  CopyButton,
} from "@mantine/core";
import { useEffect, useState } from "react";
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

  async function updateGoly(data: any) {
    setIsLoading(true);
    const json = {
      redirect: data.redirect,
      goly: data.goly,
      random: data.random,
    };

    try {
      const res = await fetch("https://goserver-306x.onrender.com/goly", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const json1 = await res.json();
      const generatedLink = "https://babyy.link/r/" + json1.goly;

     try {
       const clipboardPermission = await navigator.permissions.query({
         name: "clipboard-write",
       } as any);
       if (clipboardPermission.state === "granted") {
         navigator.clipboard.writeText(generatedLink).then(() => {
           toast.success("Link copied to clipboard!");
         });
       } else {
         throw new Error("Clipboard permissions not granted");
       }
     } catch (error) {
       toast.error("Cannot access clipboard. Please copy the link manually.");
     }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  let data = {
    redirect: "",
    goly: "",
    random: true,
  };

  useEffect(() => {
    data.redirect = name;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Your link {" "}
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
            onChange={(e: any) => setName(e.target.value)}
          />

          <CopyButton value="https://mantine.dev">
            {({ copied, copy }) => (
              <Button
                color={isLoading ? "gray" : copied ? "teal" : "blue"}
                size="xl"
                className={classes.control}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                onClick={() => updateGoly(data)}
                disabled={isLoading}
                rightIcon={isLoading && <Loader />}
              >
                {isLoading
                  ? "Generating"
                  : copied
                  ? "Copied url" 
                  : "Copy babylink"}
              </Button>
            )}
          </CopyButton>
        </Group>
      </Container>
      <FooterSocial />
    </div>
  );
}
