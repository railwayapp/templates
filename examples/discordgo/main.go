package main

import (
	"fmt"
	"github.com/bwmarrin/discordgo"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	// Create a new session using the DISCORD_TOKEN environment variable from Railway
	dg, err := discordgo.New("Bot " + os.Getenv("DISCORD_TOKEN"))
	if err != nil {
		fmt.Printf("Error while starting bot: %s", err)
		return
	}

	// Add the message handler
	dg.AddHandler(messageCreate)

	// Add the Guild Messages intent
	dg.Identify.Intents = discordgo.IntentsGuildMessages

	// Connect to the gateway
	err = dg.Open()
	if err != nil {
		fmt.Printf("Error while connecting to gateway: %s", err)
		return
	}

	// Wait until Ctrl+C or another signal is received
	fmt.Println("The bot is now running. Press Ctrl+C to exit.")
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
	<-sc

	// Close the Discord session
	dg.Close()
}

func messageCreate(s *discordgo.Session, m *discordgo.MessageCreate) {
	// Don't proceed if the message author is a bot
	if m.Author.Bot {
		return
	}

	if m.Content == "ping" {
		s.ChannelMessageSend(m.ChannelID, "Pong 🏓")
		return
	}

	if m.Content == "hello" {
		s.ChannelMessageSend(m.ChannelID, "Choo choo! 🚅")
		return
	}
}
