# Prompts.md — AI Debugging Sessions Log

This file documents where I used Claude as a pair-programmer for the ShopZone sprint.

## Session 1: Understanding Context API
**Prompt:** Asked Claude to explain how Context API avoids prop drilling and how to structure a CartContext.
**What I learned:** Context lets any nested component read/update shared state without passing props down manually through every level.

## Session 2: Routing setup
**Prompt:** Asked Claude to explain BrowserRouter, Routes, Route, and how useParams pulls the :id from the URL.
**What I learned:** Dynamic segments like /product/:id become accessible via useParams() inside that route's component.

## Session 3: Avoiding duplicate cart items
**Prompt:** Asked how to prevent adding the same product twice as separate entries.
**What I learned:** Check if item.id already exists in the array before deciding to push a new item vs. bump quantity.

(Add more entries here as you debug — screenshot or paste real prompts/responses as you go.)
