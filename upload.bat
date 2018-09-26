@echo off
aws s3 cp dist/ s3://hotate.rss --recursive
