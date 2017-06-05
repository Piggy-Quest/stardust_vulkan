////////////////////////////////////////////////////////////////////////////////
// Copyright 2017 Intel Corporation
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License.  You may obtain a copy
// of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
// License for the specific language governing permissions and limitations
// under the License.
////////////////////////////////////////////////////////////////////////////////

#version 430 core

precision highp float;

in INVOCATION
{
  vec2 texcoord;
} fs_in;

layout(binding = 7) uniform sampler2D g_hud_texture;

layout(location = 0) out vec4 fs_out_color;

void main(void)
{
  fs_out_color = texture(g_hud_texture, fs_in.texcoord);
}
