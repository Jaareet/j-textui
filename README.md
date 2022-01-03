<div align = 'center'>
  
<h3>J-TEXTUI</h3>

<hr width="500vw">
  
<h3>How to use?</h3>
</div>
  
```lua
local coords = {
     vec3(-536.773, -217.404, 37.65)
}
CreateThread(function()
     while true do
         local s = 1000;
         local ped = PlayerPedId()
         local pedCoords = GetEntityCoords(ped)
         
         for i,v in pairs(coords) do
             local dist = #(pedCoords - v)
             if dist <= 5 then 
                 inPoint = i;
                 exports["j-textui"]:Help("Press ~INPUT_CONTEXT~ to make an action")
            end
         end
         Wait(s)
     end
end)
```
<div align = 'center'>
  <h3>Preview</h3>
  
  <hr width = "500vw">
  
  <img src = "https://cdn.discordapp.com/attachments/886714318471712798/927339874841919518/unknown.png" width = "500">
  
  

  <h3>Thanks to 𝔼𝕝 ℙ𝕒𝕥𝕣𝕠𝕟#1119 for help me <3 </h3>
  <h3>Make with love</h3>
  <h3>I hope you like it <3</h3>
