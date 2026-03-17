---
type: reference
purpose: Photo references for all team members — MUST be attached to every prompt
---

# Reference Photos — Bleen Team

## CRITICAL INSTRUCTION FOR GEMINI

You will receive **reference photos of real people** attached alongside this prompt. You MUST use these photos to faithfully reproduce each person's **face, skin tone, hair, and body type** in the generated image. Do not invent faces. Do not replace them with generic people. Each person in the output must be clearly recognizable as the person in their reference photo.

## Team Members

| Code | Name | Role | Reference file |
|------|------|------|----------------|
| **DHE** | Denis | Graphic Designer (NEW — the subject of this post) | `avatars/DHE_Colors.png` or `avatars/DHE_BW.png` |
| **JTO** | JTO | Team member | `avatars/JTO.png` |
| **ODE** | ODE | Team member | `avatars/ODE.png` |
| **SDE** | SDE | Team member | `avatars/SDE.png` |
| **VPL** | Valentin | Team member | `avatars/VPL- Valentin Plumier (3).png` |

## How to use with Gemini

1. **Attach all reference photos** (avatars/) as image inputs alongside the text prompt
2. In the prompt, reference people by code: "DHE is positioned center", "JTO stands to the left"
3. Add this preamble before the scenario prompt:

```
REFERENCE PHOTOS ATTACHED: I am providing reference photos of 5 real team members (DHE, JTO, ODE, SDE, VPL). You MUST use these exact faces and physical appearances in the generated image. Do not invent or replace any person. Each individual must be clearly recognizable from their reference photo. Preserve their exact skin tone, facial features, hair texture, and body proportions.
```

## Notes

- Use DHE_Colors.png for color shots, DHE_BW.png if the output is B&W or if you need a different angle
- Denis (DHE) should always be identifiable as the focal person / new arrival in the composition
- The other 4 members can be assigned to any position in the scene — their specific placement matters less than Denis's
