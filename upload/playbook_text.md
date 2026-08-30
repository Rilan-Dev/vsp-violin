## PAGE 1

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
THE $5K-$10K
ANIMATED WEBSITE
PLAYBOOK
A practical system for art-directing premium websites with AI, bespoke
assets, image and video generation, precise prompting, GSAP, responsive
motion, and production QA.
FREE EDITION | AUGUST 2026
The goal is not to make AI "look expensive." The goal is to run a small digital studio with
enough taste, control and technical precision that AI becomes leverage instead of the art
director.
POSITIONING NOTE
A $5K-$10K site is a market position, not an automatic price tag. Scope, strategy, portfolio strength, business outcomes,
geography, sales ability and client trust all affect pricing. This guide focuses on the production system that makes premium
positioning credible.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 2

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
START HERE
How to use this playbook
This guide is designed to be executed, not merely read. Work from the front of the pipeline to
the back: reference intelligence first, then art direction, assets, motion, implementation, browser
QA and client delivery.
1 Build a reference board from multiple sources and deconstruct what you actually like.
2 Write a distinct art-direction brief before asking an image model for assets.
3 Generate and refine assets until composition, orientation, texture and negative space are intentional.
4 Animate only the state changes the design needs. Do not add motion because the tool can.
5 Implement the interaction system in React/CSS/GSAP or an equivalent stack.
6 Write a precise implementation brief, organize approved assets in the project, and preserve every locked design
decision.
7 Validate the real browser build across breakpoints, motion states, interactions, accessibility, and production
preview.
The complete studio loop
REFERENCE INTELLIGENCE
|
ART DIRECTION + TASTE
|
ASSET GENERATION -> MAGNIFIC REFINEMENT
|
HIGGSFIELD / VIDEO MOTION ASSETS
|
REACT + CSS/SVG + GSAP/LENIS
|
ITERATION + RESPONSIVE POLISH
|
PRECISE IMPLEMENTATION BRIEF
|
PROJECT ASSET ORGANIZATION
|
BROWSER QA + CLIENT DELIVERY
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 3

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
CONTENTS
The locked architecture
PART I - TASTE & DIRECTION
01 What makes a premium animated site
02 Build a reference intelligence system
03 Remix inspiration into an original direction
04 Set up the AI creative studio with MCP
PART II - ASSETS & MOTION
05 Engineer assets before code
06 Prompt visual assets precisely
07 Refine without destroying the asset
08 Turn stills into motion
09 Design the motion system before coding
PART III - IMPLEMENTATION
10 Build with GSAP and the right animation layer
11 Use SVG, shells, masks and hybrid controls
12 Treat responsive as art direction
13 Run a disciplined polish loop
14 Write implementation briefs that preserve the design
PART IV - SHIPPING & DELIVERY
15 Organize production assets inside the project
16 Run full browser QA before shipping
17 Turn the system into a client workflow
18 Final premium-site checklist
APPENDICES
A Prompt templates
B Reference decomposition worksheet
C Current tool setup and official links
D Glossary and final notes
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 4

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART I - TASTE & DIRECTION
01
What makes a premium animated site
Why generic AI output looks cheap even when the code is technically competent.
Premium work is not defined by the number of effects. It is defined by control. A high-end hero usually has a clear focal subject,
deliberate negative space, intentional typography, a restrained material language and a motion narrative that helps the
experience progress rather than merely decorate it.
THE GENERIC AI PATTERN THE PREMIUM PATTERN
Centered headline. Gradient background. Floating glass Art direction first. Bespoke assets. Strong hierarchy.
cards. Generic pill buttons. Random fade-ups. Stock-like Purposeful interactions. Exact responsive states.
imagery. Desktop-first layout with mobile treated as a Measurable motion beats. Consistent materials. Clean
scale-down. implementation and validation.
The seven levers of perceived value
• Art direction - a coherent visual thesis that can be described in one sentence.
• Asset control - custom subjects, environments, transparent layers, frames and shells instead of placeholder graphics.
• Composition - focal point and copy occupy deliberately different territories.
• Typography - hierarchy, line breaks, tracking and rhythm are treated as design, not defaults.
• Motion - state changes are timed and mapped to a narrative.
• Responsiveness - desktop, tablet and mobile are composed as distinct states.
• Implementation precision - the browser reproduces the intended values instead of letting a model "make it similar."
RULE OF THUMB
If you can remove the hero image, swap the palette and rename the brand without changing the structure, you probably have a
generic template - not an art-directed experience.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 5

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART I - TASTE & DIRECTION
02
Build a reference intelligence system
Use Awwwards, Dribbble, Pinterest, GSAP showcases and open-source work as a library of
principles - not a folder of pages to copy.
A premium site usually starts with references, but the professional skill is not collecting attractive screenshots. It is extracting
useful design decisions from them. One reference may solve typography. Another may solve navigation. A third may solve the
hero composition. A fourth may demonstrate a transition mechanic.
SOURCE WHAT TO STUDY DO NOT COPY
Awwwards / studio Composition, pacing, page rhythm, motion
Brand identity, distinctive assets, full page structure
sites hierarchy
Control treatments, cards, micro-UI, color
Dribbble Illustration or complete UI one-for-one
relationships
Photography, materials, lighting, editorial
Pinterest A copyrighted composition as the final asset
layouts, palettes
Interaction mechanics, pinning, scrub behavior,
GSAP demos The exact demo styling and copy
masks
Implementation ideas, architecture, accessibility
Open-source sites Identity, proprietary media, licenses you do not have
patterns
The reference decomposition matrix
REFERENCE
-> WHAT CAUGHT MY EYE?
-> WHY DOES IT WORK?
-> WHAT PRINCIPLE CAN I EXTRACT?
-> WHAT MUST I CHANGE?
-> WHERE DOES IT FIT IN MY OWN SYSTEM?
COPY PRINCIPLES, NOT IDENTITY
A composition principle, scroll mechanic or material treatment can inspire a new system. A finished brand, character, signature
illustration or distinctive page should not be lifted wholesale. Transformation is part of the creative process, not a legal
afterthought.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 6

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART I - TASTE & DIRECTION
03
Remix inspiration into an original direction
Turn a pile of references into a single authored visual system.
Before generation or coding, write a one-page art-direction brief. The brief forces you to decide what belongs together and what
does not. It is the filter that stops the project becoming a collage of unrelated references.
DECISION EXAMPLE QUESTIONS
Identity What is the brand trying to feel like: clinical, brutalist, cinematic, playful, technical, editorial?
Palette How many accent colors exist? Which one carries signal and which ones stay neutral?
Type What is display versus interface versus technical copy?
Geometry Soft radii, sharp chamfers, circular cutouts, thin technical frames, full bleed?
Photography Where is the subject? Which direction do they face? What light and lens language?
Motion personality Elastic, mechanical, cinematic, editorial, high-frequency HUD, slow luxury?
Interaction What does the pointer reveal, what does scroll advance, what opens on click?
A useful remix method is: Collect -> Deconstruct -> Select -> Transform -> Recombine -> Art-direct. If the result still looks like
the original reference with a different logo, the transformation step was too weak.
YOUR TASTE IS THE CONTROL LAYER
AI can produce options at speed. It cannot decide which compromises are acceptable for your brand unless you teach the system
what matters. Your job is selection, rejection and correction.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 7

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART I - TASTE & DIRECTION
04
Set up the AI creative studio with MCP
Use an agent as the production console, then connect specialist media tools for generation and
iteration.
Model Context Protocol (MCP) lets a compatible AI client call external tools inside the same working session. For a creative
workflow, that means the conversation can move from art direction to image generation, refinement, video generation and
implementation without repeatedly rebuilding context.
Magnific MCP - current setup
1 Open your MCP-compatible client and go to its Connectors/Apps area.
2 Add Magnific from the connector directory where available, or add the endpoint manually: https://mcp.magnific.com
3 Authenticate with your Magnific account and approve the requested permissions.
4 Ask the agent to generate, edit, relight or upscale an asset, then iterate on the same selected result instead of restarting
from zero.
CURRENT PRODUCT NOTE
Magnific states that MCP is available on paid plans and MCP actions consume credits. Its documentation lists Claude, ChatGPT,
Cursor, Codex, VS Code, Gemini and other compatible clients. Verify the latest plan/UI before publishing a tutorial because
connector menus can change.
Higgsfield MCP / CLI - current setup
1 For MCP, add a custom connector named Higgsfield with: https://mcp.higgsfield.ai/mcp
2 Authenticate through your Higgsfield account. The official MCP flow does not require a separate API key.
3 For Claude Code or other terminal-first workflows, the current CLI path is: npm i -g @higgsfield/cli, then higgsfield auth
login, then npx skills add higgsfield-ai/skills.
4 Use prior generations as references so the agent can refine or animate a selected asset rather than generating
disconnected variants.
CHATGPT AVAILABILITY
Full custom MCP/app support in ChatGPT is plan/workspace dependent and continues to evolve. As of Aug 2026, OpenAI
documents full MCP support for Business and Enterprise/Edu on web. If a client cannot add the connector, use a supported MCP
client such as Claude/Claude Code, Cursor, Codex or another compatible environment.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 8

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
The correct agent loop
DIRECT THE AGENT
-> GENERATE 3-5 CONTROLLED DIRECTIONS
-> SELECT ONE
-> IDENTIFY THE SPECIFIC FAILURE
-> REFINE ONLY THAT FAILURE
-> APPROVE THE ASSET
-> ANIMATE THE APPROVED ASSET
-> IMPLEMENT IT IN THE SITE
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 9

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART II - ASSETS & MOTION
05
Engineer assets before code
The strongest AI sites are designed around controlled visual inputs, not code-generated
placeholders.
Treat every critical hero asset as production material. Decide what role it plays in the DOM, what crop it needs, which areas
must remain quiet for copy, whether transparency is required and whether a separate mobile treatment is necessary.
ASSET TYPE ENGINEERING QUESTION
Hero background Where is the focal subject? Is the copy area protected? Does mobile need a different crop?
Character / product layer Does it need alpha? What is its center axis? What must never be mirrored or regenerated?
Poster frame Does it match the first video frame and prevent a black flash?
Shell / frame artwork Will live HTML sit on top? Must the asset stretch, fill, mask or clip inside a fixed box?
Texture / ornament Can it be procedural CSS/SVG instead of another request?
Video clip Is it designed for autoplay, normal playback or currentTime scrubbing?
Asset acceptance checklist
• Composition matches the intended website role, not merely a pretty standalone image.
• Subject orientation is correct and leaves deliberate negative space.
• Face/product identity survives enhancement and animation.
• Transparency edges are clean and not haloed.
• Lighting direction and color temperature match adjacent assets.
• Desktop and mobile crops have been tested in a browser-shaped frame.
• No unlicensed font, logo, stock image or proprietary visual is being redistributed.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 10

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART II - ASSETS & MOTION
06
Prompt visual assets precisely
Structure prompts like a production specification rather than an adjective pile.
A useful prompt is hierarchical. Put identity and composition first because those are the expensive things to correct later.
Lighting, materials and texture come after the image is structurally right.
IDENTITY
Exact subject / product / role.
COMPOSITION
Placement, orientation, negative space, crop, aspect ratio.
CAMERA
Framing, lens feel, perspective, camera height.
LIGHTING
Direction, softness, key/fill/rim, color temperature.
MATERIALS
Surface behavior: matte ceramic, brushed metal, real skin, leather, glass.
WEBSITE ROLE
Hero background, transparent foreground layer, card image, poster, etc.
PRESERVE
Elements that may not move or change.
DO NOT
Specific failure modes: no mirrored subject, no extra jewelry, no text, no oversharpening.
Iteration discipline
Do not rewrite the entire prompt after every defect. If composition is correct and texture is wrong, preserve composition and
correct texture. If identity is correct and the subject is facing the wrong direction, fix orientation without reopening color,
clothing and environment. Iteration becomes faster when each pass has one job.
PROMPTING IS NOT THE SAME AS ART DIRECTION
The prompt describes constraints. Art direction is the judgment that decides which constraints matter, which generation is usable
and what must be rejected.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 11

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART II - ASSETS & MOTION
07
Refine without destroying the asset
Use Magnific or another enhancer as a controlled finishing pass, not a creative reset.
Enhancement should increase believability while preserving the approved composition. The common failure is an enhancer that
makes the image superficially sharper but changes the face, invents texture or pushes everything into synthetic CGI crispness.
1 Lock the composition first. Do not enhance a structurally wrong image.
2 Identify a measurable defect: skin texture, material micro-detail, edge quality, lighting realism, local blur or aliasing.
3 Use a conservative refinement pass with explicit preservation instructions.
4 Compare against the approved source at the same crop. Check face, silhouette, negative space and object position before
checking detail.
5 Reject overprocessed outputs. A more detailed image is not automatically a more realistic image.
CHECK FAILURE SIGNAL
Identity Face shape, eyes, hairstyle or product silhouette changed
Composition Crop, camera height or subject position drifted
Texture Skin turns waxy; metal becomes plastic; wood becomes noise
Edges Transparent edges halo or gain unwanted sharpening
Lighting Rim/key direction changes and no longer matches the scene
Detail Fake micro-text, random seams, invented hardware or excessive pores
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 12

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART II - ASSETS & MOTION
08
Turn stills into motion
Animate the state change the website needs, not a generic cinematic shot.
A website motion asset is constrained by the UI. If the hero needs copy on the left, the video must protect that space
throughout the transition. If the scroll story ends on a different visual state, the final frame must land where the UI expects it.
USE CASE MOTION BRIEF
Subtle living hero Micro head/eye/environment motion; camera largely locked; seamless visual continuity
Scroll-scrub transformation Clear chronological state change with stable subject identity and no sudden camera cuts
Character reveal Preserve center axis; transition only the intended layer or pose
Product hero Controlled orbit or material reveal; no framing drift that breaks overlay UI
Green-screen / keyed asset Consistent subject, clean background, no spill on edges, minimal camera translation
Example Higgsfield-style direction
Use the approved reference image as the identity and composition anchor.
Keep the camera nearly locked. Preserve the subject on the right third for the entire clip.
Animate a restrained 6-second progression: neutral gaze -> subtle light activation -> controlled
head/eye movement -> final resolved state.
Do not change clothing, face, lens perspective, background layout or aspect ratio.
No hard cuts. No text. No extra objects. The final frame must remain compatible with left-aligned
hero copy.
FIRST/LAST FRAME THINKING
Before generating motion, define what frame 0 and the final frame must accomplish for the interface. This makes the video an asset
in a system, not a standalone clip.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 13

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART II - ASSETS & MOTION
09
Design the motion system before coding
Map states, transitions and interface reactions onto normalized progress.
Premium motion feels intentional because multiple layers respond to the same narrative. A pinned hero can treat scroll as a
normalized timeline from 0 to 1, then map video time, copy, theme, cards, navigation and progress UI to that shared progress.
0.00 0.20 0.50 0.78 1.00
ARRIVAL ---- REVEAL ---- TRANSFORM ---- PROOF/CARDS ---- RESOLUTION
| | | | |
video copy out theme shift cards in handoff
copy 1 copy 2 proof in CTA in nav state
Do not start by asking, "What animations can I add?" Start by asking, "What state is the user in now, what state comes next, and
what should visually communicate that transition?"
• Use one source of truth for scroll progress where possible.
• Define transition windows before tuning easing.
• Keep the number of simultaneous hero systems understandable.
• Avoid animation that fights the focal subject or moves copy across the face/product.
• Design the final unpin/handoff state so the page does not feel like it simply stops.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 14

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART III - IMPLEMENTATION
10
Build with GSAP and the right animation layer
Use the simplest system that can reproduce the choreography precisely.
CSS transitions and keyframes are excellent for deterministic micro-motion. GSAP becomes valuable when several elements
need coordinated timelines, precise control, pointer smoothing or scroll-linked state. ScrollTrigger supports trigger-based
animation, pinning and scrubbed timelines; its numeric scrub option adds catch-up smoothing between scrollbar and playhead.
PROBLEM GOOD DEFAULT
Simple hover / focus / loader pulse CSS transition or keyframes
Component state animation CSS or a framework motion layer
Complex timeline choreography GSAP Timeline
Pinned scroll narrative GSAP ScrollTrigger
Smooth pointer following GSAP quickTo / ticker
3D rendering requirement Three.js/WebGL only if the design genuinely needs a renderer
Scroll architecture pattern
gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline({
scrollTrigger: {
trigger: hero,
start: "top top",
end: () => "+=" + window.innerHeight * N,
pin: true,
scrub: 1,
invalidateOnRefresh: true
}
})
// Add state transitions to the timeline.
// Clean up the GSAP context / trigger on unmount.
DO NOT ANIMATE THE PINNED CONTAINER BLINDLY
Pin geometry is measurement-sensitive. Animate children inside the pinned area unless you understand how transforming the
pinned element affects ScrollTrigger calculations.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 15

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART III - IMPLEMENTATION
11
Use SVG, shells, masks and hybrid controls
Premium controls often combine authored artwork with live semantic HTML.
A button does not have to be either an image or CSS. A strong hybrid control can use a transparent generated shell underneath a
live label and live SVG arrow. The shell provides the unique material treatment; HTML preserves accessibility, responsive
typography and interaction.
BUTTON / CARD STACK
1. Supplied shell / frame artwork
2. Image or material layer
3. Directional fade / readability mask
4. Sheen / highlight
5. Rim / border / SVG outline
6. Live HTML content + semantic control
7. GSAP/CSS interaction state
• Keep exact SVG viewBox and path data when the geometry is part of the design.
• Do not replace a measured chamfer with a generic rounded rectangle.
• Use masks/clip-paths when reveal geometry is interaction-critical.
• Keep live labels out of raster assets when they need to remain accessible and responsive.
• If a supplied shell intentionally uses object-fit: fill inside a fixed box, do not "correct" it to contain.
WHY THIS MATTERS
When a coding model hears "make a luxury glass button," it invents a new design. When it receives the actual shell plus exact
HTML/SVG structure, visual inference drops dramatically.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 16

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART III - IMPLEMENTATION
12
Treat responsive as art direction
Mobile is a different composition, not desktop squeezed into less width.
Responsive fidelity is one of the fastest ways to tell whether a premium site is truly designed. The focal subject, copy block,
controls and motion density often need different rules across desktop, tablet and mobile.
STATE DECISIONS TO LOCK
Large desktop Max clamps, media quality, copy width, decoration density, wide nav
Desktop Fluid spacing, focal point, pointer behavior, pin distance
Tablet Desktop vs mobile motion branch, crop changes, control visibility
Mobile Different media/crop, copy anchoring, simplified HUD, card scroller
Short height What compresses? What must stay visible? Does the source intentionally have no height breakpoint?
Test both sides of every meaningful breakpoint. If 768 is desktop and 767 is mobile, validate both. If 640 is a hybrid state and
639 is compact mobile, validate both. A one-pixel boundary can change source selection, control visibility or motion architecture.
THE FOCAL-POINT TEST
At every viewport, draw an imaginary exclusion zone around the face/product. Important copy and controls should not collide with
it unless the art direction explicitly intends that overlap.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 17

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART III - IMPLEMENTATION
13
Run a disciplined polish loop
Iteration is part of premium work. The goal is controlled convergence, not endless tweaking.
A useful review loop is visual and measurable. Capture the site at a fixed viewport, compare it with the intended state, identify
the largest mismatch and change only the subsystem that caused it.
1 Capture the exact viewport and state.
2 List mismatches by category: geometry, asset, type, color, motion, interaction, responsive, network.
3 Choose the highest-impact mismatch. Do not change five systems at once.
4 Implement a narrow correction.
5 Re-run the same viewport/state and compare again.
6 Only after visual parity, run console/network/build checks.
PASS QUESTIONS
Visual Are subject position, scale, crop, layers, type and gradients correct?
Motion Are state windows, delays, eases and scrub behavior correct?
Interaction Do menu, cursor, hover, CTA and keyboard states behave correctly?
Responsive Are breakpoint branches and mobile media correct?
Technical No console warnings, 404s, rejected promises, overflow or build failures?
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 18

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART III - IMPLEMENTATION
14
Write implementation briefs that preserve the
design
Give the coding agent a production specification, not a pile of adjectives.
Once the art direction, assets and motion states are approved, translate those decisions into a structured implementation brief.
The objective is to make the build predictable inside one project. Exact values should be stated explicitly so the coding agent is
solving implementation rather than re-designing the page.
SECTION WHAT TO LOCK
Exact Hero boundary, DOM/component responsibilities, visible copy, and
Scope & hierarchy
what must not be invented.
Local project paths, dimensions, crop/focal rules, transparency, typography,
Assets & visual rules
colors, gradients, shells, masks, and SVG geometry.
State map, GSAP/ScrollTrigger/Lenis values, breakpoints, mobile branches,
Motion & responsive
reduced motion, interactions, and required viewport tests.
THE NO-INVENTION RULE
If a concrete value already exists - a breakpoint, transform, SVG path, timing, gradient, crop, line break, or easing - write it
into the implementation brief. Do not ask the coding model to “make something similar” when the design decision is already
known.
What belongs in a strong implementation brief
• Clear scope: what is part of the Hero and what is outside the task.
• Exact visual tokens: colors, type, spacing, gradients, masks, crop rules and responsive breakpoints.
• Exact motion architecture: state windows, GSAP/ScrollTrigger/Lenis constants, easing, sequencing and cleanup.
• Exact DOM/SVG/icon geometry and visible/accessibility copy when those details are design-critical.
• Stable local asset paths and a simple asset map so components never guess which file belongs where.
• Explicit negative constraints: what must not be added, simplified, mirrored, recolored, reflowed or substituted.
• A validation matrix covering desktop, tablet, mobile, interactions, console/build health and final motion states.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 19

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART IV - SHIPPING & DELIVERY
15
Organize production assets inside the project
Keep critical media obvious, local and role-based so the implementation stays predictable.
For most client sites, approved Hero media can live directly in the project. Use stable semantic names and a simple folder
convention so the implementation is self-contained. In Vite, large files that need stable root URLs can live under public/assets,
while smaller imported assets can live under src/assets when bundler processing is useful.
public/assets/
hero/
background-desktop.webp
background-mobile.webp
hero-poster.webp
hero-scroll.mp4
subject-transparent.webp
shared/
brand-mark.webp
navigation-shell.webp
Name assets by role, not by generation history. A component should be able to request “hero-poster.webp” or “navigation-
shell.webp” without knowing which AI tool or iteration produced it.
Asset preparation sequence
1 Give approved files semantic names and place them in Hero/shared folders before wiring components.
2 Keep the original master separately; use the approved deployment copy in the project without accidental
recompression.
3 Verify intrinsic dimensions, aspect ratio, alpha, orientation and focal point before implementation.
4 For scrubbed MP4s, keep a poster frame, browser-friendly H.264 delivery, front-loaded metadata/faststart, and
test seeking in the built site.
5 Preload only truly critical above-the-fold media; avoid duplicate requests caused by mismatched preload and
rendered paths.
6 Run the production build and preview it. Confirm every asset path works outside the development server.
KEEP THE PROJECT SELF-CONTAINED
The design guide does not require a separate asset-hosting layer. Store approved media in the repository using predictable
paths, then let the normal deployment platform serve the built site. The important part is asset fidelity, naming, preload
discipline, and browser behavior.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 20

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART IV - SHIPPING & DELIVERY
16
Run full browser QA before shipping
A premium site is not finished when one screenshot looks right.
Validate the actual browser experience: first load, motion, responsive branches, menus, hover/focus states, video seeking, asset
loading, console health and the production build. Re-test the same viewport after every meaningful correction so polish becomes
measurable rather than subjective.
QA ORDER
1 Initial load and loader/poster state
2 Hero motion from start to final handoff
3 Breakpoint edges and mobile composition
4 Menu, cursor, CTA, hover, focus and keyboard states
5 Asset loading, video seeking and performance sanity
6 Production build + preview
Evaluation matrix
GATE PASS CONDITION
Build Production build completes with no missing imports or broken asset paths.
All required local media load from the built site; correct image/video dimensions and no
Assets
duplicate critical requests.
Console No errors, warnings, unhandled promise rejections or avoidable React/runtime noise.
Desktop Composition, motion, typography and interactions match the intended large-screen state.
Correct crop, controls, line breaks, motion branch and no unintended document-level
Mobile
overflow.
Pin/scrub/transition windows, video frames, menu motion and final handoff land on the
Motion
intended states.
Keyboard, focus, reduced-motion behavior, semantic controls and readable text remain
Accessibility
usable.
FIX THE SYSTEM, NOT THE SCREENSHOT
When a mismatch appears, trace it to the responsible system - crop, spacing, typography, breakpoint, asset, timeline or
interaction. Correct the source rule and re-test the same state instead of piling on viewport-specific patches.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 21

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART IV - SHIPPING & DELIVERY
17
Turn the system into a client workflow
Use the same production discipline whether the project is a portfolio experiment or paid
delivery.
1 Discovery: clarify business goal, audience, constraints, content and success metric.
2 Reference direction: agree on visual principles, not a site to clone.
3 Art direction: lock palette, type, composition, motion personality and responsive priorities.
4 Hero concept: create the first-view system early because it sets the visual standard.
5 Asset production: generate, refine, license-check and approve critical visual inputs.
6 Implementation: build the layout and interaction architecture with clean ownership boundaries.
7 Responsive and polish: validate exact viewport states and interactions.
8 Technical QA: build, console, network, accessibility and performance checks.
9 Delivery: deployment, source handoff, documented assets/licensing and change scope.
The $5K-$10K positioning becomes easier to defend when the process itself looks like a studio: documented decisions,
deliberate assets, controlled review, clean implementation and predictable delivery. Flashy motion alone is not a business
outcome.
SELL THE SYSTEM, NOT THE TOOL LIST
Clients do not need to buy "GSAP + AI." They buy a distinctive, credible digital experience that supports their brand, campaign or
conversion objective. The tools are how you deliver it efficiently.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 22

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
PART IV - SHIPPING & DELIVERY
18
Final premium-site checklist
A compact pre-flight you can use before publishing, presenting or handing the site to a client.
ART DIRECTION
☐ One-sentence visual thesis is clear
☐ Palette and type have defined roles
☐ Reference influences have been transformed into an original system
ASSETS
☐ Subject orientation and negative space are deliberate
☐ Critical assets are approved at real browser crops
☐ Transparent edges and materials survive enhancement
☐ Rights/licenses permit the intended use
MOTION
☐ Every animation has a narrative purpose
☐ State windows are defined and testable
☐ No arbitrary effects fight the focal subject
☐ Reduced-motion behavior matches the intended/source contract
RESPONSIVE
☐ Desktop, tablet and mobile are independently composed
☐ Both sides of material breakpoints are tested
☐ No important copy overlaps the focal subject
☐ No unintended page-level horizontal overflow
TECHNICAL
☐ Production build passes
☐ Console is clean
☐ Asset paths, dimensions, preload behavior and video/poster pairing are correct
☐ Video scrub media supports seeking/ranges where required
☐ Cleanup removes listeners, tickers, observers and triggers
DELIVERY
☐ Approved assets are organized with stable semantic project paths
☐ Implementation brief contains the exact visual, motion and responsive decisions
☐ Browser QA passes at required viewport and interaction states
☐ Production build/preview matches development behavior
THE STANDARD
The target is not perfection by intuition. The target is a repeatable process where important decisions are explicit, assets are
controlled, behavior is measurable and the final implementation can survive context loss.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 23

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
APPENDIX A
Prompt templates
Use these as structures. Replace the placeholders with the specifics of the project; do not treat
them as magic incantations.
1. Reference-to-art-direction prompt
I am building a premium [CATEGORY] website.
Analyze the references I provide as separate design systems, not as pages to clone.
For each reference, extract: composition, typography, material language, interaction, motion,
lighting and navigation ideas.
Then propose 3 original art directions that recombine principles from multiple references while
changing identity, palette, copy, assets, hierarchy and layout enough to create a distinct result.
Explain what is borrowed as a principle and what is intentionally transformed.
2. Image asset prompt skeleton
ROLE: ero background / transparent foreground / card image]
IDENTITY: [subject/product]
COMPOSITION: [exact side, crop, negative space]
CAMERA: [framing/lens/perspective]
LIGHTING: [direction, softness, temperature]
MATERIALS: [realistic surface behavior]
WEBSITE PLACEMENT: [where copy/UI must remain clear]
PRESERVE: [identity/orientation/clothing/logo/geometry]
DO NOT: irror, add text, sharpen, invent objects, change crop, etc.]
3. Refinement prompt
Preserve the exact composition, crop, subject identity, pose, camera angle and lighting direction
of the selected image.
Improve only: [specific defect].
Keep materials photographic and restrained. Do not over-sharpen, invent micro-detail, alter facial
structure, move objects or change the background layout.
Return a refined version that can replace the source asset without requiring layout changes.
4. Motion asset prompt
Use the approved still as the composition and identity anchor.
Animate this website state change over [duration]: [state A] -> [state B].
Keep [subject] in the same screen territory for the entire clip so [left/right] UI remains
unobstructed.
Preserve identity, wardrobe/product geometry, camera perspective and aspect ratio.
No cuts, no extra objects, no text. The final frame must satisfy: [final UI requirement].
5. Coding implementation brief
Implement the supplied art direction as an exact first-view system.
Treat assets, breakpoint rules, copy, SVG geometry, animation constants and interaction behavior
as authoritative.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 24

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
Do not redesign or genericize.
Use the smallest animation stack capable of reproducing the choreography.
Validate build, console, network, responsive states and reduced-motion behavior before completion.
APPENDIX B
Reference decomposition worksheet
REFERENCE WHAT I LIKE WHY IT WORKS HOW I TRANSFORM IT
1
2
3
4
5
Art-direction synthesis
Visual thesis: ________________________________________________________________________________
Palette: ________________________________________________________________________________
Display type: ________________________________________________________________________________
UI/technical type: ________________________________________________________________________________
Subject & camera: ________________________________________________________________________________
Material language: ________________________________________________________________________________
Motion personality: ________________________________________________________________________________
Hero interaction: ________________________________________________________________________________
Mobile strategy: ________________________________________________________________________________
Explicit exclusions: ________________________________________________________________________________
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 25

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
APPENDIX C
Current tool setup & official links
These details were verified against official documentation in August 2026. Interfaces, plans and
product capabilities can change, so re-check the linked docs before publishing a step-by-step
tutorial.
TOOL ENDPOINT / COMMAND NOTE
Official docs say MCP is available on paid plans; MCP
Magnific MCP https://mcp.magnific.com
actions consume credits.
Authenticate with your Higgsfield account; no
Higgsfield MCP https://mcp.higgsfield.ai/mcp
separate API key required for the MCP flow.
Then higgsfield auth login; companion skills: npx skills
Higgsfield CLI npm i -g @higgsfield/cli
add higgsfield-ai/skills.
Official docs for pin, scrub, refresh, cleanup and
GSAP ScrollTrigger https://gsap.com/docs/v3/Plugins/ScrollTrigger/
ScrollTrigger options.
Vite static asset Official Vite guidance for imported assets
https://vite.dev/guide/assets.html
handling and files served from public/.
ChatGPT custom Full custom MCP support is plan/workspace
https://help.openai.com/en/articles/12584461
MCP/apps dependent and evolving.
Official references: Magnific MCP Higgsfield MCP Higgsfield CLI GSAP ScrollTrigger Vite Static Assets OpenAI MCP apps
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 26

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
APPENDIX D
Glossary & final notes
TERM MEANING
Art direction The coherent visual and behavioral thesis that controls what belongs in the project.
Negative space Deliberately quiet image territory reserved for copy/UI.
MCP Model Context Protocol: a standard for connecting an AI client to external tools/services.
A structured build specification that locks scope, assets, visual values, motion,
Implementation brief
responsive rules and validation before coding.
A simple list of approved project media, semantic local paths, roles, dimensions and
Asset map
preservation rules.
Scroll scrub An animation or media playhead mapped to scroll progress rather than normal playback.
Pin Keeping a section fixed while the page consumes additional scroll distance.
A repeatable browser/build validation run across required viewports, motion states,
QA pass
interactions, assets and accessibility.
Focal exclusion zone Area around a face/product that important copy should not cross without deliberate intent.
FINAL PRINCIPLE
AI is most powerful when you remove unnecessary manual repetition without removing judgment. Keep taste, selection, licensing,
accessibility and final accountability in the human loop.
Build the system once. Then make each new site a controlled variation of a proven production
pipeline - not another improvisation from zero.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

## PAGE 27

THE $5K-$10K ANIMATED WEBSITE PLAYBOOK
REFERENCE -> TASTE -> ASSETS -> MOTION -> CODE ->
VALIDATION
The premium difference is control.
AI ART DIRECTION -> ASSETS -> MOTION -> CODE -> BROWSER QA + DELIVERY

---

