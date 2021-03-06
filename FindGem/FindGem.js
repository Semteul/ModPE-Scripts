/*
 * Copyright 2015 CodeInside
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const className = "FindGem";
const VERSION = "Indev-1.0";
const VERSION_CODE = 100;

var TAG = "[" + className + " " + VERSION + "] ";

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var PIXEL = android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, 1, ctx.getResources().getDisplayMetrics());
var FILE_SD_CARD = android.os.Environment.getExternalStorageDirectory();
var FILE_MOD_DIR = new java.io.File(FILE_SD_CARD, "games/com.mojang/minecraftpe/mods");
var FILE_MAIN_DIR = new java.io.File(FILE_MOD_DIR, className);
var FILE_FONT = new java.io.File(FILE_MOD_DIR, "minecraft.ttf");
var FILE_MAIN_DATA = new java.io.File(FILE_MAIN_DIR, "setting.json");
var FILE_TEST_DATA = new java.io.File(FILE_MAIN_DIR, "lastLog.txt");
var FILE_NO_MEDIA = new java.io.File(FILE_MAIN_DIR, ".nomedia");
function FILE_MAP_DIR() {return new java.io.File(FILE_SD_CARD, "games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/mods")}
function FILE_MAP_DATA() {return new java.io.File(FILE_MAP_DIR(), className + ".json")}
if(!(FILE_MAIN_DIR.exists())) {
	FILE_MAIN_DIR.mkdirs();
	FILE_NO_MEDIA.createNewFile();
}
if(!(FILE_MAIN_DATA.exists())) {
	FILE_MAIN_DATA.createNewFile();
}
var DIP = PIXEL * loadData(FILE_MAIN_DATA, "DIPS");
if(DIP == null || DIP == 0){
	DIP = PIXEL;
}



var Byte = java.lang.Byte;
var Int = java.lang.Integer;
var Float = java.lang.Float;
var Double = java.lang.Double;
var Boolean = java.lang.Boolean;
var Long = java.lang.Long;
var Short = java.lang.Short;
var Context = android.content.Context;
var Thread = java.lang.Thread;
var Runnable = java.lang.Runnable;
var AlertDialog = android.app.AlertDialog;
var View = android.view.View;
var ViewGroup = android.view.ViewGroup;
var MotionEvent = android.view.MotionEvent;
var Gravity = android.view.Gravity;
var FrameLayout = android.widget.FrameLayout;
var RelativeLayout = android.widget.RelativeLayout;
var LinearLayout = android.widget.LinearLayout;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var Button = android.widget.Button;
var ImageView = android.widget.ImageView;
var EditText = android.widget.EditText;
var ProgressBar = android.widget.ProgressBar;
var PopupWindow = android.widget.PopupWindow;
var StateListDrawable = android.graphics.drawable.StateListDrawable;
var GradientDrawable = android.graphics.drawable.GradientDrawable;
var BitmapDrawable = android.graphics.drawable.BitmapDrawable;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var ClipDrawable = android.graphics.drawable.ClipDrawable;
var LayerDrawable = android.graphics.drawable.LayerDrawable;
var Bitmap = android.graphics.Bitmap;
var BitmapFactory = android.graphics.BitmapFactory;
var Color = android.graphics.Color;
var Canvas = android.graphics.Canvas;
var Paint = android.graphics.Paint;
var Path = android.graphics.Path;
var Shader = android.graphics.Shader;
var Matrix = android.graphics.Matrix;
var Typeface = android.graphics.Typeface;
var ArrayList = java.util.ArrayList;
var Calendar = java.util.Calendar;
var GregorianCalendar = java.util.GregorianCalendar;

var c = {};
c.m = ViewGroup.LayoutParams.MATCH_PARENT;
c.w = ViewGroup.LayoutParams.WRAP_CONTENT;
c.a = java.lang.reflect.Array.newInstance;
c.r = RelativeLayout;
c.l = LinearLayout;
c.p = android.util.TypedValue.COMPLEX_UNIT_PX;
c.s = net.zhuoweizhang.mcpelauncher.ScriptManager;



var Assets = {};
//DO NOT USE(TEXTURE PACK MISSING)
Assets.mcpeCPC = ctx.createPackageContext("com.mojang.minecraftpe", Context.CONTEXT_IGNORE_SECURITY);
Assets.mcpe = Assets.mcpeCPC.getAssets();
//spritesheet.png
try{
	Assets.mcpeSS = ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png");
}catch(e) {
	//old version
	Assets.mcpeSS = mcpeAssets.open("images/gui/spritesheet.png");
}
Assets.mcpeSS_BF = BitmapFactory.decodeStream(Assets.mcpeSS);
//touchgui.png
try {
	Assets.mcpeTG = ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png");
}catch(e) {
	Assets.mcpeTG = mcpeAssets.open("images/gui/touchgui.png");
}
Assets.mcpeTG_BF = BitmapFactory.decodeStream(Assets.mcpeTG);

Assets.fullBackground_raw = Bitmap.createBitmap(Assets.mcpeSS_BF, 0, 0, 16, 16);
Assets.fullBackground = Bitmap.createScaledBitmap(Assets.fullBackground_raw, PIXEL*32, PIXEL*32, false);
Assets.fullBackground_9 = function() {return ninePatch1(Assets.fullBackground, PIXEL*12, PIXEL*12, PIXEL*24, PIXEL*24)}

Assets.background_raw = Bitmap.createBitmap(Assets.mcpeSS_BF, 34, 43, 14, 14);
Assets.background = Bitmap.createScaledBitmap(Assets.background_raw, PIXEL*28, PIXEL*28, false);
Assets.background_9 = function() {return ninePatch1(Assets.background, PIXEL*12, PIXEL*12, PIXEL*22, PIXEL*22)}

Assets.title_left_raw = Bitmap.createBitmap(Assets.mcpeTG_BF, 150, 26, 2, 25);
Assets.title_left_pixel = new c.a(Int.TYPE, 50);
Assets.title_right_raw = Bitmap.createBitmap(Assets.mcpeTG_BF, 162, 26, 2, 25);
Assets.title_right_pixel = new c.a(Int.TYPE, 50);
Assets.title_center_raw = Bitmap.createBitmap(Assets.mcpeTG_BF, 153, 26, 8, 25);
Assets.title_center_pixel = new c.a(Int.TYPE, 200);
Assets.title_bottom_raw = Bitmap.createBitmap(Assets.mcpeTG_BF, 153, 52, 8, 3);
Assets.title_bottom_pixel = new c.a(Int.TYPE, 24);
Assets.title_left_raw.getPixels(Assets.title_left_pixel, 0, 2, 0, 0, 2, 25);
Assets.title_right_raw.getPixels(Assets.title_right_pixel, 0, 2, 0, 0, 2, 25);
Assets.title_center_raw.getPixels(Assets.title_center_pixel, 0, 8, 0, 0, 8, 25);
Assets.title_bottom_raw.getPixels(Assets.title_bottom_pixel, 0, 8, 0, 0, 8, 3);
Assets.title_pixel = margeArray(Assets.title_left_pixel, Assets.title_center_pixel, "HORIZONTAL", 2, 25, 8, 25, null);
Assets.title_pixel = margeArray(Assets.title_pixel, Assets.title_right_pixel, "HORIZONTAL", 10, 25, 2, 25, null);
Assets.title_pixel = margeArray(Assets.title_pixel, Assets.title_bottom_pixel, "VERTICAL", 12, 25, 8, 3, null);
Assets.title_raw = Bitmap.createBitmap(12, 28, Bitmap.Config.ARGB_8888);
Assets.title_raw.setPixels(Assets.title_pixel, 0, 12, 0, 0, 12, 28);
Assets.title = Bitmap.createScaledBitmap(Assets.title_raw, PIXEL*24, PIXEL*56, false);
Assets.title_9 = function() {
	return ninePatch1(Assets.title, PIXEL*5, PIXEL*5, PIXEL*46, PIXEL*20);
}

Assets.exit_raw = Bitmap.createBitmap(Assets.mcpeSS_BF, 60, 0, 18, 18);
Assets.exit = Bitmap.createScaledBitmap(Assets.exit_raw, 18*PIXEL, 18*PIXEL, false);
Assets.exit_9 = function() {return ninePatch1(Assets.exit, PIXEL*6, PIXEL*6, PIXEL*30, PIXEL*30)}

Assets.exitClick_raw = Bitmap.createBitmap(Assets.mcpeSS_BF, 78, 0, 18, 18);
Assets.exitClick = Bitmap.createScaledBitmap(Assets.exitClick_raw, PIXEL*36, PIXEL*36, false);
Assets.exitClick_9 = function() {return ninePatch1(Assets.exitClick, PIXEL*6, PIXEL*6, PIXEL*32, PIXEL*32)}

Assets.button_raw = Bitmap.createBitmap(Assets.mcpeSS_BF,8,32,8,8);
Assets.button = Bitmap.createScaledBitmap(Assets.button_raw, PIXEL*16, PIXEL*16, false);
Assets.button_9 = function() {return ninePatch1(Assets.button, PIXEL*6, PIXEL*4, PIXEL*14, PIXEL*14)}

Assets.buttonClick_raw = Bitmap.createBitmap(Assets.mcpeSS_BF,0,32,8,8);
Assets.buttonClick = Bitmap.createScaledBitmap(Assets.buttonClick_raw, PIXEL*16, PIXEL*16, false);
Assets.buttonClick_9 = function() {return ninePatch1(Assets.buttonClick, PIXEL*4, PIXEL*4, PIXEL*12, PIXEL*14)}

Assets.miniButton_raw = Bitmap.createBitmap(Assets.mcpeSS_BF,8,33,8,7);
Assets.miniButton = Bitmap.createScaledBitmap(Assets.miniButton_raw, PIXEL*16, PIXEL*14, false);
Assets.miniButton_9 = function() {return ninePatch1(Assets.miniButton, PIXEL*2, PIXEL*2, PIXEL*12, PIXEL*14)}

Assets.miniButtonClick_raw = Bitmap.createBitmap(Assets.mcpeSS_BF,0,32,8,7);
Assets.miniButtonClick = Bitmap.createScaledBitmap(Assets.miniButtonClick_raw, PIXEL*16, PIXEL*14, false);
Assets.miniButtonClick_9 = function() {return ninePatch1(Assets.miniButtonClick, PIXEL*4, PIXEL*4, PIXEL*12, PIXEL*12)}


var b = Color.parseColor("#6b6163");
var i = Color.parseColor("#3a393a");
Assets.textView_pixel = [
b,b,b,b,b,b,
b,b,b,b,b,b,
b,b,i,i,b,b,
b,b,i,i,b,b,
b,b,b,b,b,b,
b,b,b,b,b,b
];
Assets.textView_raw = Bitmap.createBitmap(6, 6, Bitmap.Config.ARGB_8888);
Assets.textView_raw.setPixels(Assets.textView_pixel, 0, 6, 0, 0, 6, 6);
Assets.textView = Bitmap.createScaledBitmap(Assets.textView_raw, PIXEL*6, PIXEL*6, false);
Assets.textView_9 = function() {return ninePatch1(Assets.textView, PIXEL*3, PIXEL*3, PIXEL*4, PIXEL*4)}

function mcpeText(size, text, shadow) {
	var tv = new TextView(ctx);
	tv.setTransformationMethod(null);
	tv.setLayerType(android.view.View.LAYER_TYPE_SOFTWARE, null);
	if(shadow) {
		tv.setShadowLayer(1/0xffffffff, DIP*1.3, DIP*1.3, Color.DKGRAY);
	}
	tv.setTextColor(Color.WHITE);
	tv.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, size);
	if(FILE_FONT.exists()) {
		tv.setTypeface(android.graphics.Typeface.createFromFile(FILE_FONT));
	};
	tv.setPadding(0, 0, 0, 0);
	tv.setText(text);
	return tv;
}

function mcpeButton(size, text) {
	var btn = new Button(ctx);
	btn.setTransformationMethod(null);
	btn.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
	btn.setPadding(DIP*8, DIP*8, DIP*8, DIP*8);
	btn.setText(text);
	btn.setTextColor(Color.WHITE);
	btn.setTextSize(c.p, size);
	btn.setShadowLayer(1/0xffffffff, DIP*1.3, DIP*1.3, Color.DKGRAY);
	if(FILE_FONT.exists()) {
		btn.setTypeface(android.graphics.Typeface.createFromFile(FILE_FONT));
	}
	btn.setBackgroundDrawable(Assets.button_9());
	
	btn.setOnTouchListener(View.OnTouchListener({onTouch: function(view, event) {try {
		switch(event.action) {
			case MotionEvent.ACTION_DOWN:
			view.setBackgroundDrawable(Assets.buttonClick_9());
			view.setTextColor(Color.parseColor("#ffff80"));
			view.setPadding(DIP*8, DIP*12, DIP*8, DIP*8);
			break;
			case MotionEvent.ACTION_CANCEL:
			case MotionEvent.ACTION_UP:
			view.setBackgroundDrawable(Assets.button_9());
			view.setTextColor(Color.WHITE);
			view.setPadding(DIP*8, DIP*8, DIP*8, DIP*8);
			break;
		}
		return false;
	}catch(e) {
		showError(e);
		return false;
	}}}));
	
	return btn;
}

function mcpeDialog(title, layout, btnName, btnFunc, btn2Name, btn2Func) {
	var l = new c.r(ctx);
	l.setId(randomId());
	l.setBackgroundDrawable(Assets.background_9());
	
	var t = new c.r(ctx);
	t.setId(randomId());
	t.setBackgroundDrawable(Assets.title_9());
	t.setPadding(DIP*8, DIP*8, DIP*8, DIP*14);
	var t_p = new c.r.LayoutParams(c.m, c.w);
	t_p.addRule(c.r.ALIGN_PARENT_TOP, l.getId());
	t.setLayoutParams(t_p);
	
	var tt = mcpeText(DIP*16, title, true);
	var tt_p = new c.r.LayoutParams(c.w, c.w);
	tt_p.addRule(c.r.CENTER_IN_PARENT, t.getId());
	tt.setLayoutParams(tt_p);
	t.addView(tt);
	
	var tb = mcpeButton(DIP*16, btn2Name);
	var tb_p = new c.r.LayoutParams(DIP*70, DIP*34);
	tb_p.setMargins(0, 0, 0, 0);
	tb_p.addRule(c.r.ALIGN_PARENT_LEFT, t.getId());
	tb_p.addRule(c.r.ALIGN_PARENT_TOP, t.getId());
	tb.setLayoutParams(tb_p);
	t.addView(tb);
	
	var ta = mcpeButton(DIP*16, btnName);
	var ta_p = new c.r.LayoutParams(DIP*70, DIP*34);
	ta_p.setMargins(0, 0, 0, 0);
	ta_p.addRule(c.r.ALIGN_PARENT_RIGHT, t.getId());
	ta_p.addRule(c.r.ALIGN_PARENT_TOP, t.getId());
	ta.setLayoutParams(ta_p);
	t.addView(ta);
	
	var ct = new ScrollView(ctx);
	var ct_p = new c.r.LayoutParams(c.m, c.m);
	ct_p.setMargins(DIP*8, 0, DIP*8, DIP*8);
	ct_p.addRule(c.r.BELOW, t.getId());
	ct.setLayoutParams(ct_p);
	ct.addView(layout);
	
	l.addView(t);
	l.addView(ct);
	
	var w = new PopupWindow(l, DIP*300, DIP*240, false);
	
	uiThread(function() {try {
		w.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER, 0, 0);
		tb.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		w.dismiss();
		btn2Func();
	}catch(e) {
		showError(e);
	}}}));
	
	ta.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		w.dismiss();
		btnFunc();
	}catch(e) {
		showError(e);
	}}}));
	
	}catch(e) {
		showError(e);
	}});
}

mcpeDialog("hello", new Button(ctx), "Aaaaaaa", function() {print("hello")}, "Back", function() {});

/**
 * Error report
 *
 * @since 2015-04
 * @author CodeInside
 *
 * @param {error} e
 */

function showError(e) {
	if(Level.getWorldName() === null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
	android.widget.Toast.makeText(ctx, "[" + className + " ERROR LINE: " + e.lineNumber + "]" + "\n" + e, android.widget.Toast.LENGTH_LONG).show();
		}}));
	}else {
		var t = (e + "").split(" ");
		var c = "";
		var temp = "";
		for(var l = 0; l < t.length; l++) {
			if(temp.split("").length > 30) {
				c += ("\n" + ChatColor.DARK_RED);
				temp = "";
			}
			c += t[l] + " ";
			temp += t[l];
		}
		clientMessage(ChatColor.DARK_RED + "[" + className + " ERROR LINE: " + e.lineNumber + "]\n" + ChatColor.DARK_RED + c);
	}
}



/**
 * debug
 *
 * @since 2014-12
 * @author CodeInside
 */
 
var debugging = true;
function debug(str) {
	if(debugging) {
		if(!gm.onMap) {
			 ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		android.widget.Toast.makeText(ctx, "[Debug]\n" + str, android.widget.Toast.LENGTH_SHORT).show();
			}}));
		}else {
			clientMessage("[debug] " + str);
		}
	}
}



function toast(str) {
	ctx.runOnUiThread(new java.lang.Runnable( {
		run: function(){
			try{
				android.widget.Toast.makeText(ctx, str, android.widget.Toast.LENGTH_LONG).show();
			}catch(e) {}
		}
	}
	));
}

function toasts(str) {
	ctx.runOnUiThread(new java.lang.Runnable( {
		run: function(){
			try{
				android.widget.Toast.makeText(ctx, str, android.widget.Toast.LENGTH_SHORT).show();
			}catch(e) {}
		}
	}
	));
}

function broadcast(str){
	net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(str);
	//clientMessage("<" + Player.getName(Player.getEntity()) + "> " + str);
}

function sleep(int){
	java.lang.Thread.sleep(int);
}

function uiThread(fc) {
	return ctx.runOnUiThread(new java.lang.Runnable({run: fc}))
}
function thread(fc) {
	return new java.lang.Thread(new java.lang.Runnable( {run: fc}))
}



/**
 * Download file
 *
 * @since 2015-01
 * @author CodeInside
 * 
 * @param <File> path
 * @param <String> url
 * @param <ProgressBar|Null> progressBar
 */

function downloadFile(path, url, progressBar) {
	try{
		var tempApiUrl = new java.net.URL(url);
		var tempApiUrlConn = tempApiUrl.openConnection();
		tempApiUrlConn.connect();
		var tempBis = new java.io.BufferedInputStream(tempApiUrl.openStream());
		if(progressBar !== null) {
			progressBar.setMax(tempApiUrlConn.getContentLength());
		}
		var tempFos = new java.io.FileOutputStream(path);
		var tempData = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
		var tempTotal = 0, tempCount;
		while ((tempCount = tempBis.read(tempData)) != -1) {
			tempFos.write(tempData, 0, tempCount);
			tempTotal += tempCount;
			if(progressBar !== null) {
				progressBar.setProgress(tempTotal);
			}
		}
		tempFos.flush();
		tempFos.close();
		tempBis.close();
		return true;
	}catch(e){
		return false;
	}
}



//==============================
//-NinePatch JS
//Copyright® 2015 affogatoman(colombia2)
//==============================
/**
 * Nine Patch
 *
 * @since 2015
 * @author affogatoman
 */

function ninePatch1(bitmap, top, left, bottom, right, width, height) {
	var getByteBuffer = function(top, left, bottom, right) {
		var NO_COLOR = 0x00000001;
		var buffer = java.nio.ByteBuffer.allocate(84).order(java.nio.ByteOrder.nativeOrder());
		buffer.put(0x01);
		buffer.put(0x02);
		buffer.put(0x02);
		buffer.put(0x09);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(left);
		buffer.putInt(right);
		buffer.putInt(top);
		buffer.putInt(bottom);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		return buffer;
	};
	var buffer = getByteBuffer(top, left, bottom, right);
    return new android.graphics.drawable.NinePatchDrawable(ctx.getResources(), bitmap, buffer.array(), new android.graphics.Rect(), "");
}
function ninePatch2(bitmap, top, left, bottom, right, width, height) {
	var getByteBuffer = function(top, left, bottom, right) {
		var NO_COLOR = 0x00000001;
		var buffer = java.nio.ByteBuffer.allocate(84).order(java.nio.ByteOrder.nativeOrder());
		buffer.put(0x01);
		buffer.put(0x02);
		buffer.put(0x02);
		buffer.put(0x09);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(0);
		buffer.putInt(left);
		buffer.putInt(right);
		buffer.putInt(top);
		buffer.putInt(bottom);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		buffer.putInt(NO_COLOR);
		return buffer;
	};
	var buffer = getByteBuffer(top, left, bottom, right);
	var patch = new android.graphics.drawable.NinePatchDrawable(ctx.getResources(), bitmap, buffer.array(), new android.graphics.Rect(), "");
	//var bm = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888);
	return patch;
}

/**
 * Marge Array
 *
 * @since 2015-06
 * @author CodeInside
 *
 * @param (Array) arr1
 * @param (Array) arr2
 * @param (String) margeType <HORIZONTAL, VERTICAL>
 * @param (Int) width1
 * @param (Int) height1
 * @param (Int) width2
 * @param (Int) height2
 * @param (...) fillBlank
 * @return (Array) 
 */
function margeArray(arr1, arr2, margeType, width1, height1, width2, height2, fillBlank) {
	var arr = [];
	switch(margeType) {
		case "HORIZONTAL":
			var maxHeight = height1 >= height2 ? height1 : height2;
			for(var e = 0; e < maxHeight; e++) {
				if(e < height1) {
					for(var f = 0; f < width1; f++) {
						arr.push(arr1[(e*width1) + f]);
					}
				}else {
					for(var f = 0; f < width1; f++) {
						if(fillBlank === null) {
							arr.push(arr1[(width1*(height1-1)) + f]);
						}else {
							arr.push(fillBlank);
						}
					}
				}
				if(e < height2) {
					for(var f = 0; f < width2; f++) {
						arr.push(arr2[(e*width2) + f]);
					}
				}else {
					for(var f = 0; f < width2; f++) {
						if(fillBlank === null) {
							arr.push(arr2[(width2*(height2-1)) + f]);
						}else {
							arr.push(fillBlank);
						}
					}
				}
			}
			break;
		case "VERTICAL":
			var maxWidth = width1 >= width2 ? width1 : width2;
			for(var e = 0; e < height1 + height2; e++) {
				for(var f = 0; f < maxWidth; f++) {
					if(e < height1) {
						if(f < width1) {
							arr.push(arr1[(e*width1) + f]);
						}else {
							if(fillBlank === null) {
								arr.push(arr1[((e+1)*width1) - 1]);
							}else {
								arr.push(fillBlank);
							}
						}
					}else {
						if(f < width2) {
							arr.push(arr2[((e-height1)*width2) + f]);
						}else {
							if(fillBlank === null) {
								arr.push(arr2[((e-height1+1)*width2) - 1]);
							}else {
								arr.push(fillBlank);
							}
						}
					}
				}
			}
			break;
		default:
			print("Unknown margeType: " + margeType);
	}
	return arr;
}



/**
 * save/load Data
 *
 * @since 2015-02
 * @author CodeInside
 */

function saveData(file, article, value) {
	if(!file.exists()) {
		file.createNewFile()
	}
	try{
		var fileInputStream = new java.io.FileInputStream(file);
	}catch(e) {
		return false;
	}
	var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
	var bufferedReader = new java.io.BufferedReader(inputStreamReader);
	var tempRead, tempReadString;
	var tempSaved = "";
	while((tempRead = bufferedReader.readLine()) != null){
		tempReadString = tempRead.toString();
		if(tempReadString.split("¶")[0] == article)
			continue;
		tempSaved += tempReadString + "\n";
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	var fileOutputStream = new java.io.FileOutputStream(file);
	var outputStreamWriter = new java.io.OutputStreamWriter(fileOutputStream);
	outputStreamWriter.write(tempSaved + article + "¶" + value);
	outputStreamWriter.close();
	fileOutputStream.close();
	return true;
}

function loadData(file, article) {
	try{
		var fileInputStream = new java.io.FileInputStream(file);
	}catch(e) {
		return false;
	}
	var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
	var bufferedReader = new java.io.BufferedReader(inputStreamReader);
	var tempRead, tempReadString, str;
	while((tempRead = bufferedReader.readLine()) != null){
		tempString = tempRead + "";
		if(tempString.split("¶")[0] == article){
			str = tempString.split("¶")[1];
			if(tempString.split("¶")[2] == "n") {
				do {
					tempRead = bufferedReader.readLine();
					tempString = tempRead + "";
					str += "\n" + tempString.split("¶")[0];
				}while(tempString.split("¶")[1] == "n");
			}
			fileInputStream.close();
			inputStreamReader.close();
			bufferedReader.close();
			return str;
		}
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	return null;
}



/**
 * load/save Minecraft Setting
 *
 * @since 2015-04
 * @author CodeInside
 */

function saveSetting(article, value) {
	var fileInputStream = new java.io.FileInputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
	var bufferedReader = new java.io.BufferedReader(inputStreamReader);
	var tempRead, tempReadString;
	var tempSaved = "";
	while((tempRead = bufferedReader.readLine()) != null){
		tempReadString = tempRead.toString();
		if(tempReadString.split(":")[0] == article)
			continue;
		tempSaved += tempReadString + "\n";
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	var fileOutputStream = new java.io.FileOutputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var outputStreamWriter = new java.io.OutputStreamWriter(fileOutputStream);
	outputStreamWriter.write(tempSaved + article + ":" + value);
	outputStreamWriter.close();
	fileOutputStream.close();
	//this is not work
	net.zhuoweizhang.mcpelauncher.ScriptManager.requestGraphicsReset();
}

function loadSetting(article) {
	var fileInputStream = new java.io.FileInputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
	var bufferedReader = new java.io.BufferedReader(inputStreamReader);
	var tempRead, tempReadString;

	while((tempRead = bufferedReader.readLine()) != null){
		tempReadString = tempRead.toString();
		if(tempReadString.split(":")[0] == article){
			fileInputStream.close();
			inputStreamReader.close();
			bufferedReader.close();
			return tempReadString.split(":")[1];
		}
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	return null;
}



var EntityExtra = {};

EntityExtra.isEqual = function(obj1, obj2) {
	return Entity.getUniqueId(obj1) === Entity.getUniqueId(obj2);
}

EntityExtra.findEnt = function(uniqId) {
	var list = EntityExtra.getAll();
	var max = list.length;
	for(var e = 0; e < max; e++) {
		if(uniqId === Entity.getUniqueId(list[e])) {
			return list[e];
		}
	}
}

EntityExtra.getAll = function() {
	var entities = new Array(c.s.allentities.size());
		for(var n = 0; entities.length > n; n++){
			entities[n] = c.s.allentities.get(n);
		}
		return entities;
}

EntityExtra.getRange = function(obj1, obj2) {try {
	return Math.sqrt(Math.pow(Entity.getX(obj1) - Entity.getX(obj2), 2) + Math.pow(Entity.getY(obj1) - Entity.getY(obj2), 2) + Math.pow(Entity.getZ(obj1) - Entity.getZ(obj2), 2));
}catch(e) {
	return null;
}};



var PlayerExtra = {};

PlayerExtra.isOnline = function(player) {
	var list = EntityExtra.getAll();
	for(var e = 0; e < list.length; e++) {
		if(Player.isPlayer(list[e]) && EntityExtra.isEqual(list[e], player)) {
			return true;
		}
	}
	return false;
}

PlayerExtra.getOnlinePlayers = function() {
	var entitys = EntityExtra.getAll();
	var list = [];
	for(var e = 0; e < entitys.length; e++) {
		if(Player.isPlayer(entitys[e])) {
			list.push(entitys[e]);
		}
	}
	return list;
}

PlayerExtra.getNearPlayers = function() {
	var a = EntityExtra.getAll();
	var f = [];
	var r = [];
	var n = [];
	for(var e = 0; e < a.length; e++) {
		if(Player.isPlayer(a[e]) && !EntityFix.isEqual(a[e], Player.getEntity())) {
			f.push(a[e]);
			r.push(EntityExtra.getRange(a[e], Player.getEntity()));
		}
	}
	while(r.length > 0) {
		var i = r.indexOf(Math.min.apply(null, r));
		n.push(f[i]);
		f.splice(i, 1);
		r.splice(i, 1);
	}
	return n;
}



function randomId() {
	return Math.floor(Math.random()*0xffffff);
}

thread(function() {try {
	if(!FILE_FONT.exists()) {
		if(!downloadFile(FILE_FONT, "https://www.dropbox.com/s/y1o46b2jkbxwl3o/minecraft.ttf?dl=1")) {
			toast(TAG + "폰트를 다운로드하지 못했습니다\n아마도 인터넷이 연결되어 있지 않습니다");
			toasts(TAG + "시스템 폰트를 적용합니다...");
		}
	}
}catch(e) {
	showError(e);
}});

function newLevel(str) {
	gm.onMap = true;
}

function leaveGame() {
	gm.onMap = false;
}

function modTick() {
	
}

function attackHook(attacker, victim) {
	
}

function deathHook(attacker, victim) {
	preventDefault();
	gm.killFilter(attacker, victim);
}

var gm = {};
gm.windowAlive = false;
gm.menuWindowAlive = false;

gm.isRun = false;
gm.userData = [];



gm.getIndexByName = function(name) {
	for(var e = 0; e < gm.userData.length; e++) {
		if(gm.userData[e].name == name) {
			return e;
		}
	}
	return -1;
}



gm.selectPlayers = function() {
	var list = PlayerExtra.getOnlinePlayers();
	
	var l = new c.l(ctx);
	l.setOrientation(c.l.VERTICAL);
	
	for(var e = 0; e < list.length; e++) {
		var name = Player.getName(list[e]);
		var b = mcpeButton(DIP*16, name);
		var i = gm.getIndexByName(name);
		debug(name + " index: " + i);
		if(i !== -1) {
			b.setTextColor(Color.parseColor("#ffff80"));
		}
		b.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
			var name = view.getText() + "";
			var i = gm.getIndexByName(name);
			if(i === -1) {
				gm.userData.push({name: name, elemental: [], kill: 0, killList: [], death: false});
				debug(name + " push! " + gm.getIndexByName(name));
				view.setTextColor(Color.parseColor("#ffff80"));
			}else {
				gm.userData.splice(i, 1);
				debug(name + " splice! " + gm.getIndexByName(name));
				view.setTextColor(Color.WHITE);
			}
		}catch(e) {
			showError(e);
		}}}));
		l.addView(b);
	}
	mcpeDialog("Select...", l, "Done", function() {}, "Back", function() {});
}



gm.readyAll = function() {
	var list = PlayerExtra.getOnlinePlayers();
	for(var e = 0; e < list.length; e++) {
		var name = Player.getName(list[e]);
		var i = gm.getIndexByName(name);
		if(i === -1) {
			gm.userData.push({name: name, elemental: [], kill: 0, killList: [], death: false});
		}
	}
	gm.ready();
}



gm.ready = function() {
	if(gm.userData.length < 1) {
		mcpeDialog("Warning", mcpeText(DIP*16, "선택한 참여 플레이어가 2명 이하입니다.\n게임을 계속 진행할 수 없습니다.\n\n'Ok'를 누르면 종료합니다...", true), "Ok", function() {}, "Back", function() {});
		broadcast(ChatColor.DARK_RED + TAG + "참가하는 플레이어가 2명 보다 적습니다.");
		broadcast(ChatColor.DARK_RED + TAG + "게임을 진행할 수 없습니다.");
		return;
	}else if(gm.userData.length < 8) {
		mcpeDialog("Warning", mcpeText(DIP*16, "참가하는 플레이어가 8명 보다 적습니다.\n한 사람에게 2개 이상의 보석이 주어질 수 있습니다.\n\n'Ok'를 눌러 계속합니다...", true), "Ok", function() {gm.isRun = true;gm.needHelp();broadcast(ChatColor.RED + TAG + "참가하는 플레이어가 8명 보다 적습니다.");broadcast(ChatColor.RED + "한 사람에게 2개 이상의 보석이 주어질 수 있습니다")}, "Back", function() {});
		return;
	}
	gm.isRun = true;
	gm.needHelp();
}



gm.needHelp = function() {
	var help = function() {thread(function() {try {
		broadcast(ChatColor.YELLOW + TAG + "환영합니다.");
		sleep(5000);
		broadcast(ChatColor.YELLOW + "본 게임은 마지막까지 생존하는 분이");
		broadcast(ChatColor.YELLOW + "이기는 생존게임입니다");
		sleep(5000);
		broadcast(ChatColor.YELLOW + "게임이 시작하면");
		broadcast(ChatColor.AQUA + "다이아몬드, " + ChatColor.GOLD + "금, " + ChatColor.WHITE + "철, " + ChatColor.RED + "레드스톤");
		broadcast(ChatColor.YELLOW + "중에 하나가 지급됩니다.");
		sleep(1000);
		broadcast(ChatColor.AQUA + "다이아몬드" + ChatColor.YELLOW + "은(는) " + ChatColor.GOLD + "금");
		broadcast(ChatColor.GOLD + "금" + ChatColor.YELLOW + "은(는) " + ChatColor.WHITE + "철");
		broadcast(ChatColor.WHITE + "철" + ChatColor.YELLOW + "은(는) " + ChatColor.RED + "레드스톤");
		broadcast(ChatColor.RED + "레드스톤" + ChatColor.YELLOW + "은(는) " + ChatColor.AQUA + "다이아몬드");
		broadcast(ChatColor.YELLOW + "를 가지고 있는 플레이어를 죽일 수 있습니다");
		sleep(10000);
		broadcast(ChatColor.YELLOW + "만약 상대에게 헤당하는 보석이 없으면");
		broadcast(ChatColor.YELLOW + "죽일 수 없습니다");
		sleep(5000);
		broadcast(ChatColor.YELLOW + "상대를 죽이면 보석을 얻을 수 있지만");
		broadcast(ChatColor.YELLOW + "많은 보석을 얻는다는 것은 그 만큼 죽어서");
		broadcast(ChatColor.YELLOW + "보석을 잃을 확률도 올라갑니다");
		sleep(10000);
		gm.start();
	}catch(e) {
		gm.isRun = false;
		showError(e);
	}}).start()}
	mcpeDialog("Need Help?", mcpeText(DIP*16, "도움말을 방송할까요?", true), "Yes", help, "No", gm.start);
}



gm.start = function() {
	thread(function() {try {
		broadcast(ChatColor.AQUA + TAG + "잠시후 게임이 시작합니다...");
		sleep(3000);
		broadcast(ChatColor.DARK_GRAY + TAG + "Load Player List...");
		var l = gm.userData.length;
		var p = [0,0,1,1,2,2,3,3];
		for(var e = 0; e < l; e++) {
			if(p.length > 0) {
				var r = Math.floor(Math.random() * p.length);
				gm.userData[e].elemental.push(p[r]);
				broadcast(ChatColor.DARK_GRAY + TAG + "Division... " + Math.floor(e/l*100) + "%");
				p.splice(r, 1);
			}else {
				gm.userData[e].elemental.push(Math.floor(Math.random() * 4));
				broadcast(ChatColor.DARK_GRAY + TAG + "Supplement... " + Math.floor(e/l*100) + "%");
			}
			sleep(1000);
		}
		while(p.length > 0) {
			var r = Math.floor(Math.random() * p.length);
			gm.userData[Math.floor(Math.random() * gm.userData.length)].elemental.push(p[r]);
			broadcast(ChatColor.DARK_GRAY + TAG + "Extra... " + p.length + "left");
			p.splice(r, 1);
			sleep(1000);
		}
		var l = c.l(ctx);
		l.setOrientation(c.l.VERTICAL);
		l.addView(mcpeText(DIP*16, "킬 타임을 설정해 주세요 (분 단위)", true));
		var l2 = c.l(ctx);
		l2.setOrientation(c.l.HORIZONTAL);
		l2.setGravity(Gravity.CENTER);
		l2.setPadding(DIP*8, DIP*50, DIP*8, DIP*8);
		
		gm.tempDe = mcpeButton(DIP*16, "<");
		gm.tempDe.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
			var m = parseInt(gm.tempTv.getText() + "");
			if(m > 0) {
				gm.tempTv.setText((m - 1) + "");
			}else {
				toasts(TAG + "킬 타임은 '0'분 보다 작을 수 없습니다");
			}
		}catch(e) {
			showError(e);
		}}}));
		l2.addView(gm.tempDe);
		
		gm.tempTv = mcpeText(DIP*16, "3", true);
		gm.tempTv.setText("3");
		gm.tempTv.setPadding(DIP*10, 0, DIP*10, 0);
		l2.addView(gm.tempTv);
		
		gm.tempIn = mcpeButton(DIP*16, ">");
		gm.tempIn.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
			var m = parseInt(gm.tempTv.getText() + "");
			if(m < 20) {
				gm.tempTv.setText((m + 1) + "");
			}else {
				toasts(TAG + "킬 타임은 '20'분 보다 클 수 없습니다");
			}
		}catch(e) {
			showError(e);
		}}}));
		l2.addView(gm.tempIn);
		
		l.addView(l2);
		
		mcpeDialog("Kill Time", l, "Done", function() {}, "Skip", function() {});
	}catch(e) {
		showError(e);
		gm.isRun = false;
	}}).start();
}



gm.killFilter = function(attacker, victim) {try {
	var an = Player.getName(attacker);
	var vn = Player.getName(victim);
	var i = gm.getIndexByName(an);
	var vi = gm.getIndexByName(vn);
	if(i !== -1 && vi !== -1) {
		
		for(var e = 0; e < gm.userData[i].elemental.length; e++) {
			for(var f = 0; f < gm.userData[vi].elemental.length; e++) {
				var ai = gm.userData[i].elemental[e];
				if(--ai < 0) {
					ai = 3;
				}
				if(ai === gm.userData[vi].elemental[f]) {
					debug(an + " kill " + vn);
					//TODO (kill)
					return;
				}
			}
		}
		debug(an + " fail to kill " + vn);
		for(var e = 0; e < gm.userData[i].elemental.length; e++) {
			for(var f = 0; f < gm.userData[vi].elemental.length; e++) {
				var ai = gm.userData[i].elemental[e];
				if(++ai > 3) {
					ai = 0;
				}
				if(ai === gm.userData[vi].elemental[f]) {
					debug(vn + " kill " + an);
					//TODO (kill)
					return;
				}
			}
		}
		debug(vn + " fail to kill " + an);
		//TODO
	}
}catch(e) {
	showError(e);
}};



gm.loadGui = function() {
	debug("load gui");
	gm.btn = new Button(ctx);
	gm.btn.setTransformationMethod(null);
	gm.btn.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
	gm.btn.setPadding(0,0,0,0);
	gm.btn.setText("Gem");
	gm.btn.setTextColor(Color.WHITE);
	gm.btn.setTextSize(c.p, DIP*16);
	gm.btn.setShadowLayer(1/0xffffffff, DIP*1.3, DIP*1.3, Color.DKGRAY);
	if(FILE_FONT.exists()) {
		gm.btn.setTypeface(android.graphics.Typeface.createFromFile(FILE_FONT));
	}
	gm.btn.setBackgroundDrawable(Assets.button_9());
	
	gm.btn.setOnTouchListener(View.OnTouchListener({onTouch: function(view, event) {try {
		switch(event.action) {
			case MotionEvent.ACTION_DOWN:
			view.setBackgroundDrawable(Assets.buttonClick_9());
			view.setTextColor(Color.parseColor("#ffff80"));
			view.setPadding(0,DIP*4,0,0);
			break;
			case MotionEvent.ACTION_CANCEL:
			case MotionEvent.ACTION_UP:
			view.setBackgroundDrawable(Assets.button_9());
			view.setTextColor(Color.WHITE);
			view.setPadding(0,0,0,0);
			break;
		}
		return false;
	}catch(e) {
		showError(e);
		return false;
	}}}));
	
	gm.btn.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		gm.showMenu(true);
	}catch(e) {
		showError(e);
	}}}));
	
	gm.window = new PopupWindow(gm.btn, DIP*60, DIP*34, false);
	debug("window loaded");
}

gm.showWindow = function(vis) {
	if(vis) {
		if(gm.windowAlive) return;
		debug("window show");
		uiThread(function() {try {
			gm.window.showAtLocation(ctx.getWindow().getDecorView(), Gravity.TOP|Gravity.RIGHT, DIP*40, DIP*5);
			gm.windowAlive = true;
		}catch(e) {
			showError(e);
		}});
	}else {
		if(!gm.windowAlive) retrun;
		debug("window close");
		uiThread(function() {try {
			gm.window.dismiss();
			gm.windowAlive = false;
		}catch(e) {
			showError(e);
		}});
	}
}

gm.loadMenuGui = function() {
	gm.menu = c.r(ctx);
	gm.menu.setId(randomId());
	gm.menu.setBackgroundColor(Color.argb(150,0,0,0));
	
	gm.title = new c.r(ctx);
	gm.title.setId(randomId());
	gm.title.setPadding(0, 0, 0, DIP*6);
	gm.title.setBackgroundDrawable(Assets.title_9());
	gm.title_p = new c.r.LayoutParams(c.m, c.w);
	gm.title_p.addRule(c.r.ALIGN_PARENT_TOP, gm.menu.getId());
	gm.title.setLayoutParams(gm.title_p);
	
	gm.menu_back = mcpeButton(DIP*16, "Back");
	gm.menu_back_p = new c.r.LayoutParams(DIP*70, DIP*34);
	gm.menu_back_p.setMargins(DIP*8, DIP*8, 0, 0);
	gm.menu_back_p.addRule(c.r.ALIGN_PARENT_TOP, gm.title.getId());
	gm.menu_back_p.addRule(c.r.ALIGN_PARENT_LEFT, gm.title.getId());
	gm.menu_back.setLayoutParams(gm.menu_back_p);
	gm.menu_back.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		gm.showMenu(false);
	}catch(e) {
		showError(e);
	}}}));
	gm.title.addView(gm.menu_back);
	
	gm.menu_text = mcpeText(DIP*16, "Find Gem", true);
	gm.menu_text_p = new c.r.LayoutParams(c.w, c.w);
	gm.menu_text_p.addRule(c.r.CENTER_IN_PARENT, gm.title.getId());
	gm.menu_text.setLayoutParams(gm.menu_text_p);
	gm.title.addView(gm.menu_text);
	
	gm.menu.addView(gm.title);
	
	gm.ctn = new ScrollView(ctx);
	gm.ctn_p = new c.r.LayoutParams(c.m, c.m);
	gm.ctn_p.addRule(c.r.BELOW, gm.title.getId());
	gm.ctn.setLayoutParams(gm.ctn_p);
	
	gm.ctn_l = new c.l(ctx);
	gm.ctn_l.setOrientation(c.l.VERTICAL);
	
	gm.ctn1 = mcpeButton(DIP*16, "Play");
	gm.ctn1.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		if(gm.isRun) {
			mcpeDialog("Warning", mcpeText(DIP*16, "이미 게임이 진행중입니다.\n\n'Ok'를 누르면 취소합니다...", true), "Ok", function() {}, "Back", function() {});
			return;
		}
		if(gm.userData.length <= 0) {
			mcpeDialog("Warning", mcpeText(DIP*16, "참가할 플레이어를 지정하지 않았습니다.\n자동으로 모든 플레이어가 참가합니다.\n\n'Play'를 누르면 계속합니다...", true), "Play", gm.readyAll, "Back", function() {});
			return;
		}
		gm.ready();
	}catch(e) {
		showError(e);
	}}}));
	gm.ctn1_p = new c.l.LayoutParams((ctx.getWindowManager().getDefaultDisplay().getWidth()/2) - DIP*32, DIP*50);
	gm.ctn1_p.setMargins(DIP*8, DIP*4, DIP*8, DIP*4);
	gm.ctn1.setLayoutParams(gm.ctn1_p);
	gm.ctn_l.addView(gm.ctn1);
	
	gm.ctn2 = mcpeButton(DIP*16, "Select Players");
	gm.ctn2.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		gm.selectPlayers();
	}catch(e) {
		showError(e);
	}}}));
	gm.ctn2_p = new c.l.LayoutParams((ctx.getWindowManager().getDefaultDisplay().getWidth()/2) - DIP*32, DIP*50);
	gm.ctn2_p.setMargins(DIP*8, DIP*4, DIP*8, DIP*4);
	gm.ctn2.setLayoutParams(gm.ctn2_p);
	gm.ctn_l.addView(gm.ctn2);
	
	gm.ctn3 = mcpeButton(DIP*16, "Setting");
	gm.ctn3.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		
	}catch(e) {
		showError(e);
	}}}));
	gm.ctn3_p = new c.l.LayoutParams((ctx.getWindowManager().getDefaultDisplay().getWidth()/2) - DIP*32, DIP*50);
	gm.ctn3_p.setMargins(DIP*8, DIP*4, DIP*8, DIP*4);
	gm.ctn3.setLayoutParams(gm.ctn3_p);
	gm.ctn_l.addView(gm.ctn3);
	
	gm.ctn4 = mcpeButton(DIP*16, "---");
	gm.ctn4.setOnClickListener(View.OnClickListener({onClick: function(view, event) {try {
		
	}catch(e) {
		showError(e);
	}}}));
	gm.ctn4_p = new c.l.LayoutParams((ctx.getWindowManager().getDefaultDisplay().getWidth()/2) - DIP*32, DIP*50);
	gm.ctn4_p.setMargins(DIP*8, DIP*4, DIP*8, DIP*4);
	gm.ctn4.setLayoutParams(gm.ctn4_p);
	gm.ctn_l.addView(gm.ctn4);
	
	gm.ctn.addView(gm.ctn_l);
	
	gm.menu.addView(gm.ctn);
	
	gm.menuWindow = new PopupWindow(gm.menu, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight(), false);
}

gm.showMenu = function(vis) {try {
	if(vis) {
		if(gm.menuWindowAlive) return;
		uiThread(function() {try {
			gm.menuWindow.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT|Gravity.TOP, 0, 0);
			gm.menuWindowAlive = true;
		}catch(e) {
			showError(e);
		}});
	}else {
		if(!gm.menuWindowAlive) return;
		uiThread(function() {try {
			gm.menuWindow.dismiss();
			gm.menuWindowAlive = false;
		}catch(e) {
			showError(e);
		}});
	}
}catch(e) {
	showError(e);
}}

gm.loadGui();
gm.loadMenuGui();
gm.showWindow(true);